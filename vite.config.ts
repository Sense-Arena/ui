import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    react(),
    dts({
      outputDir: path.resolve(__dirname, 'dist/types'),
      exclude: ['**/stories/**'],
      entryRoot: path.resolve(__dirname, 'src/index.ts'),
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@sa-ui',
      formats: ['es', 'umd'],
      fileName: format => `@sa-ui.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@mui/material',
        '@react-spring/web',
        '@vanilla-extract/css',
        '@vanilla-extract/recipes',
        '@emotion/react',
        '@emotion/styled',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mui/material': 'MUI',
          '@react-spring/web': 'SpringWeb',
          '@vanilla-extract/css': 'VanillaCss',
          '@vanilla-extract/recipes': 'VanillaRecipes',
          '@emotion/react': 'EmoReact',
          '@emotion/styled': 'Emo',
        },
      },
    },
  },
});
