import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const qs = await getCollection('questions');
  const paths = ['/', '/questions/', '/you/', '/you/christian/', '/you/buddhist/', '/you/non-religious/', '/mosques/', '/ask/', '/about/',
    ...qs.map((q) => `/questions/${q.id}/`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
    .map((p) => `  <url><loc>${new URL(p, site)}</loc></url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
