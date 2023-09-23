import { viteLitLoader } from '@mordech/vite-lit-loader';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [viteLitLoader(), dts()],
  build: {
    outDir: 'dist',
    lib: {
      name: 'dynamic-grid-web',
      entry: {
        index: 'lib/index.ts',
      },
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
});
