import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts(), react()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  build: {
    outDir: 'dist',
    lib: {
      name: 'dynamic-grid-react',
      entry: {
        index: 'lib/index.ts',
      },
    },
  },
});
