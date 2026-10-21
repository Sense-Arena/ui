import assert from 'node:assert/strict';
import { execFileSync, execSync } from 'node:child_process';
import { cp, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { build, preview } from 'vite';

const root = fileURLToPath(new URL('..', import.meta.url));
const manifest = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'));
const temporary = await mkdtemp(path.join(tmpdir(), 'sensearena-ui-package-'));
const runNode = (cwd, ...args) => execFileSync(process.execPath, args, { cwd, stdio: 'inherit' });

try {
  // Packing here skips prepack because CI builds first. Nothing is published.
  const [pack] = JSON.parse(execSync('npm pack --ignore-scripts --json', { cwd: root, encoding: 'utf8' }));
  const archive = path.join(root, pack.filename);
  await cp(archive, path.join(temporary, pack.filename));
  await rm(archive);
  const shipped = pack.files.map(file => file.path).sort();
  assert.deepEqual(shipped.filter(file => file.startsWith('dist/')), [
    'dist/@sa-ui.es.js', 'dist/@sa-ui.es.mjs', 'dist/@sa-ui.umd.js',
    'dist/index.d.mts', 'dist/index.d.ts', 'dist/style.css',
  ]);
  assert(shipped.every(file => file.startsWith('dist/') || ['package.json', 'README.md', 'LICENSE'].includes(file)));
  assert.deepEqual(manifest.sideEffects, ['**/*.css']);

  const matrix = [
    { name: 'React 18 / Spring 9 / TypeScript 5.3', react: '18.2.0', spring: '9.7.3',
      typescript: '5.3.3', reactTypes: '18.2.38', domTypes: '18.2.17' },
    { name: 'React 19 / Spring 10 / TypeScript 6', react: manifest.devDependencies.react,
      spring: manifest.devDependencies['@react-spring/web'], typescript: manifest.devDependencies.typescript,
      reactTypes: manifest.devDependencies['@types/react'], domTypes: manifest.devDependencies['@types/react-dom'] },
  ];

  for (const [index, versions] of matrix.entries()) {
    console.log('\nChecking ' + versions.name);
    const fixture = path.join(temporary, String(index));
    await cp(path.join(root, 'tests'), fixture, { recursive: true });
    await writeFile(path.join(fixture, 'package.json'), JSON.stringify({
      private: true, type: 'module',
      dependencies: {
        '@sensearena/ui': 'file:../' + pack.filename,
        react: versions.react, 'react-dom': versions.react,
        '@react-spring/web': versions.spring,
        '@vanilla-extract/css': manifest.devDependencies['@vanilla-extract/css'],
        '@vanilla-extract/recipes': manifest.devDependencies['@vanilla-extract/recipes'],
        '@types/react': versions.reactTypes, '@types/react-dom': versions.domTypes,
        typescript: versions.typescript,
        ...(index === 0 ? { '@types/scheduler': '0.16.8' } : {}),
      },
    }));
    execSync('npm install --ignore-scripts --no-audit --no-fund --strict-peer-deps', { cwd: fixture, stdio: 'inherit' });

    const consumer = await readFile(path.join(fixture, 'consumer-types.tsx'), 'utf8');
    for (const [resolution, module, extension] of [
      ['Bundler', 'ESNext', 'tsx'], ['Node16', 'Node16', 'mts'], ['NodeNext', 'NodeNext', 'cts'],
    ]) {
      const file = extension === 'tsx' ? 'consumer-types.tsx' : 'consumer.' + extension;
      await writeFile(path.join(fixture, file), extension === 'tsx' ? consumer : [
        "import { Button, type ButtonProps } from '@sensearena/ui';",
        "const props: ButtonProps = { color: 'primary' };",
        'void Button; void props;',
      ].join('\n'));
      const args = ['node_modules/typescript/bin/tsc', '--noEmit', '--strict', '--jsx', 'react-jsx',
        '--lib', 'ES2020,DOM', '--target', 'ES2020', '--module', module, '--moduleResolution', resolution, file];
      runNode(fixture, ...args);
    }

    // Load the installed tarball in both Node module systems and render with the consumer's React.
    await writeFile(path.join(fixture, 'server.mjs'), `
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as esm from '@sensearena/ui';
const require = createRequire(import.meta.url);
const cjs = require('@sensearena/ui');
assert.deepEqual(Object.keys(esm).sort(), Object.keys(cjs).sort());
for (const ui of [esm, cjs]) {
  const html = renderToStaticMarkup(createElement(ui.Button, null, 'SSR works'));
  assert.match(html, /SSR works/);
  assert.match(html, /class=/);
  assert.equal(typeof ui.themeVars.colors.atpBlue, 'string');
}
console.log(Object.keys(esm).length + ' exports, ESM + CommonJS + SSR OK');
`);
    runNode(fixture, 'server.mjs');

    await writeFile(path.join(fixture, 'index.html'),
      '<!doctype html><html><head><link rel="icon" href="data:,"></head><body><div id="app"></div><script type="module" src="/consumer.jsx"></script></body></html>');
    await build({ root: fixture, configFile: false, logLevel: 'warn' });
    const assets = await readdir(path.join(fixture, 'dist/assets'));
    const css = assets.filter(file => file.endsWith('.css'));
    assert(css.length > 0, 'CSS must survive consumer tree shaking');
    assert((await readFile(path.join(fixture, 'dist/assets', css[0]), 'utf8')).length > 1000);

    const server = await preview({ root: fixture, configFile: false,
      preview: { host: '127.0.0.1', port: 0, open: false }, logLevel: 'warn' });
    let browser;
    try {
      browser = await chromium.launch({ headless: true });
      const page = await browser.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
      await page.goto('http://127.0.0.1:' + server.httpServer.address().port);
      await page.getByText('Package loaded', { exact: true }).waitFor();
      await page.locator('[data-sa-id="counter"]').click();
      await page.getByRole('button', { name: 'Clicks: 1', exact: true }).waitFor();
      assert(await page.getByRole('button', { name: 'Loading', exact: true }).isDisabled());
      await page.getByLabel('Name', { exact: true }).fill('Consumer');
      assert.equal(await page.getByLabel('Name', { exact: true }).inputValue(), 'Consumer');
      await page.locator('[data-sa-id="checkbox"]').click();
      await page.waitForFunction(() => document.querySelector('[data-testid="checked"]').textContent === 'true');

      for (const name of ['select', 'dropdown']) {
        await page.locator('[data-sa-id="' + name + '"]').click();
        await page.locator('[data-sa-id="' + name + '-child-1"]').click();
        assert.match(await page.locator('[data-sa-id="' + name + '"]').textContent(), /Beta/);
        await page.locator('[data-sa-id="' + name + '"]').click();
        await page.keyboard.press('Escape');
        await page.locator('[data-sa-id="' + name + '-child-1"]').waitFor({ state: 'detached' });
      }
      await page.locator('[data-sa-id="multi"]').click();
      await page.locator('[data-sa-id="multi-child-1"]').click();
      await page.waitForFunction(() => document.querySelector('[data-testid="multi-value"]').textContent === 'Beta');
      await page.getByText('Package loaded', { exact: true }).click();
      await page.getByRole('button', { name: 'Open modal', exact: true }).click();
      await page.getByText('Portal content', { exact: true }).waitFor({ state: 'visible' });
      await page.getByRole('button', { name: 'Close modal', exact: true }).click();
      await page.getByText('Portal content', { exact: true }).waitFor({ state: 'detached' });
      await page.waitForFunction(() => document.body.style.overflow !== 'hidden');
      await page.getByRole('button', { name: 'Show all', exact: true }).click();
      await page.getByText('Second item', { exact: true }).waitFor({ state: 'visible' });
      await page.waitForFunction(() => document.querySelector('[data-testid="ticks"]').textContent === '2');
      const buttonStyle = await page.locator('[data-sa-id="counter"]').evaluate(el => ({
        background: getComputedStyle(el).backgroundImage, border: getComputedStyle(el).borderTopStyle,
      }));
      assert.notEqual(buttonStyle.background, 'none');
      assert.notEqual(buttonStyle.border, 'outset');
      await page.getByRole('button', { name: 'Show GDPR', exact: true }).click();
      await page.getByRole('button', { name: 'edit settings', exact: true }).click();
      await page.getByRole('heading', { name: 'Information about cookies on this website', exact: true }).waitFor({ state: 'visible' });
      await page.getByRole('button', { name: 'accept all', exact: true }).last().click();
      await page.getByRole('button', { name: 'edit settings', exact: true }).waitFor({ state: 'detached' });
      const consent = await page.evaluate(() => JSON.parse(localStorage.getItem('cookie_consent')));
      assert.deepEqual(consent, { required: true, advertising: true, functional: true });
      assert.deepEqual(errors, []);
      console.log('Consumer browser build, CSS, inputs, menus, animation, modal, GDPR and hooks OK');
    } finally {
      await browser?.close();
      await new Promise((resolve, reject) => server.httpServer.close(error => error ? reject(error) : resolve()));
    }
  }
  console.log('\nPackage compatibility checks passed.');
} finally {
  assert.equal(path.dirname(temporary), path.resolve(tmpdir()));
  assert(path.basename(temporary).startsWith('sensearena-ui-package-'));
  await rm(temporary, { recursive: true, force: true });
}
