import { litStyleLoader } from '@mordech/vite-lit-loader';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    litStyleLoader(),
    dts({
      include: 'lib/**/*.ts',
      exclude: ['**/*.test.ts', '**/*.spec.ts'],
      insertTypesEntry: true,
      tsconfigPath: 'tsconfig.build.json',
    }),
  ],
  build: {
    outDir: 'dist',
    lib: {
      name: 'dynamic-grid-web',
      entry: {
        index: 'lib/index.ts',
      },
    },
    rollupOptions: {
      output: {
        globals: {
          lit: 'lit',
          'lit/decorators.js': 'lit',
          'lit/directives/class-map.js': 'lit',
          'lit/directives/ref.js': 'lit',
          'lit/directives/style-map.js': 'lit',
          'lit-html/is-server.js': 'lit-html',
        },
      },
      external: /^lit/,
    },
  },
});
