import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { chromium } from 'playwright';
import { preview } from 'vite';

const { entries } = JSON.parse(await readFile('storybook-static/index.json', 'utf8'));
const server = await preview({
  configFile: false,
  build: { outDir: 'storybook-static' },
  preview: { host: '127.0.0.1', port: 0, open: false },
  logLevel: 'warn',
});
let browser;
try {
  browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  // Remote fonts and links are unrelated to component rendering.
  await page.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1'
    ? route.continue() : route.abort());
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  let checked = 0;
  for (const entry of Object.values(entries)) {
    errors.length = 0;
    const mode = entry.type === 'docs' ? 'docs' : 'story';
    await page.goto('http://127.0.0.1:' + server.httpServer.address().port
      + '/iframe.html?id=' + entry.id + '&viewMode=' + mode);
    if (mode === 'story') {
      await page.waitForFunction(() => {
        const phase = window.__STORYBOOK_PREVIEW__?.currentRender?.phase;
        return phase === 'finished' || phase === 'errored';
      }, undefined, { timeout: 15000 });
      assert.equal(await page.evaluate(() => window.__STORYBOOK_PREVIEW__.currentRender.phase),
        'finished', entry.id);
      if (entry.id === 'ui-gdpr--base') {
        assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('cookie_consent'))?.required), true);
      }
    } else {
      await page.locator('.sbdocs-content').waitFor({ state: 'visible', timeout: 15000 });
    }
    assert.deepEqual(errors, [], entry.id);
    if (++checked % 20 === 0) console.log('Storybook: ' + checked + '/' + Object.keys(entries).length);
  }
  console.log('Storybook: all ' + checked + ' stories and documentation pages rendered successfully.');
} finally {
  await browser?.close();
  await new Promise((resolve, reject) => server.httpServer.close(error => error ? reject(error) : resolve()));
}
