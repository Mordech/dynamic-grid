import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: [
        '@astrojs/react',
        '@types/react',
        '@types/react-dom',
        '@astrojs/check',
        'typescript',
      ],
    },
  },
});
