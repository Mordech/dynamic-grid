import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  plugins: [
    dts({
      exclude: ['**/*.test.tsx', './lib/App.tsx', './lib/main.tsx'],
      insertTypesEntry: true,
    }),
    react(),
    libInjectCss(),
  ],
  css: { modules: { localsConvention: 'camelCaseOnly' } },
  build: {
    outDir: 'dist',
    lib: {
      formats: ['es'],
      name: 'dynamic-grid-react',
      entry: { index: 'lib/index.ts' },
    },
    rollupOptions: { external: ['react', 'react/jsx-runtime'] },
  },
});
