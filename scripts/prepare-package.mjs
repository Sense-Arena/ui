import { copyFile } from 'node:fs/promises';

// Keep the legacy bundler entry and provide native ESM + matching declarations.
await copyFile('dist/@sa-ui.es.mjs', 'dist/@sa-ui.es.js');
await copyFile('dist/index.d.ts', 'dist/index.d.mts');
