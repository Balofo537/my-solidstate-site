import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config'; // pulls site.url

export default defineConfig({
  site: SITE.url, // ✅ Required by RSS, Sitemap, etc.
  integrations: [mdx(), sitemap()],
  server: {
    host: '0.0.0.0',
  },
});
