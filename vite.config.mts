import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { dts } from 'rollup-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import packageJson from './package.json' with { type: 'json' };

const { peerDependencies } = packageJson;

export default defineConfig(({ mode }) => ({
  plugins: [
    vanillaExtractPlugin({ extract: { name: 'style.css' } }),
    react(),
    ...(mode === 'analyze' ? [visualizer({ filename: 'dist/stats.html' })] : []),
    {
      name: 'declarations',
      async closeBundle() {
        const { rollup } = await import('rollup');
        const bundle = await rollup({
          input: 'src/index.ts',
          external: id => !id.startsWith('.') && !id.startsWith('/') && !/^[A-Za-z]:/.test(id),
          plugins: [dts()],
        });
        try {
          await bundle.write({ file: 'dist/index.d.ts', format: 'es' });
        } finally {
          await bundle.close();
        }
      },
    },
  ],
  build: {
    // Keep the browser baseline of the previous Vite 5 build.
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: 'UI',
      formats: ['es', 'umd'],
      fileName: format => format === 'es' ? '@sa-ui.es.mjs' : '@sa-ui.umd.js',
    },
    rolldownOptions: {
      // Styles are extracted above; generated CSS imports have no remaining JS side effects.
      treeshake: { moduleSideEffects: id => !id.endsWith('.vanilla.css') },
      external: id => Object.keys(peerDependencies).some(name => id === name || (name !== '@vanilla-extract/recipes' && id.startsWith(name + '/'))),
      output: {
        assetFileNames: '[name][extname]',
        globals: {
          '@react-spring/web': 'SpringWeb',
          '@vanilla-extract/css': 'VanillaCss',
          '@vanilla-extract/recipes': 'VanillaRecipes',
          react: 'React',
          'react/jsx-runtime': 'ReactJSXRuntime',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
}));
