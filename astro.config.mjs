// @ts-check
import { defineConfig } from 'astro/config';
import compress from 'astro-compressor';
import partytown from '@astrojs/partytown';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://account.pelagornis.com',
  output: 'static',
  integrations: [
    compress(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko', 'ja', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
