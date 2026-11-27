import { defineConfig } from 'astro/config';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// SITE_URL: the site's origin, e.g. https://msims-io.github.io or https://islam-algi.kr
// BASE_PATH: sub-path when hosted under one, e.g. /gunggeumhan-islam (GitHub Pages project site). Empty for a custom domain.
// GitHub reports http:// for a custom domain until HTTPS is enforced; canonical links should always be https.
const site = (process.env.SITE_URL || 'https://example.kr').replace(/^http:\/\/(?!localhost)/, 'https://');
const base = (process.env.BASE_PATH || '').replace(/\/$/, '');

// Pages and Markdown link with root paths like "/questions/". When the site lives under a
// sub-path, prefix every root-relative href/src/action in the built HTML with it.
const prefixBase = {
  name: 'prefix-base',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      if (!base) return;
      const root = fileURLToPath(dir);
      const walk = async (d) => {
        for (const e of await readdir(d, { withFileTypes: true })) {
          const p = join(d, e.name);
          if (e.isDirectory()) await walk(p);
          else if (e.name.endsWith('.html')) {
            const s = await readFile(p, 'utf8');
            const out = s.replace(/(href|src|action)="(\/(?!\/)[^"]*)"/g, (m, a, url) =>
              url === base || url.startsWith(`${base}/`) ? m : `${a}="${base}${url}"`,
            );
            if (out !== s) await writeFile(p, out);
          }
        }
      };
      await walk(root);
    },
  },
};

export default defineConfig({
  site,
  base: base || undefined,
  trailingSlash: 'always',
  integrations: [prefixBase],
});
