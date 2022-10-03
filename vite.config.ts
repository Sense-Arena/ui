import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { peerDependencies } from './package.json';

export default defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    react({
      jsxRuntime: 'classic',
    }),
    dts({
      outputDir: path.resolve(__dirname, 'dist/types'),
      exclude: ['**/stories/**'],
      entryRoot: path.resolve(__dirname, 'src/index.ts'),
      afterDiagnostic: console.debug,
      skipDiagnostics: false,
      copyDtsFiles: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'UI',
      formats: ['es', 'umd'],
      fileName: format => `@sa-ui.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        globals: {
          '@emotion/react': 'EmoReact',
          '@emotion/styled': 'Emo',
          '@mui/material': 'MUI',
          '@react-spring/web': 'SpringWeb',
          '@vanilla-extract/css': 'VanillaCss',
          '@vanilla-extract/recipes': 'VanillaRecipes',
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
