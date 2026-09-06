import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Doména je pripojená ako www (apex presmeruje 308 → www), preto kanonické adresy používajú www
  site: 'https://www.rentalpartners.sk',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // 404 nepatrí do sitemapy
      filter: (page) => !page.endsWith('/404'),
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
