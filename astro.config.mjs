import { defineConfig } from 'astro/config';

// Set SITE_URL when the real domain is chosen, e.g. https://islam-algi.kr
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.kr',
  trailingSlash: 'always',
});
