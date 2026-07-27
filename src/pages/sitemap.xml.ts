import type { APIRoute } from "astro";
import { visibleProjects } from "../data/portfolio";

const staticRoutes = [
  "",
  "projects/",
  "about/",
  "experience/",
  "skills/",
  "contact/",
  "privacy/"
];

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL("https://kesehet.github.io");
  const base = import.meta.env.BASE_URL;
  const routes = [
    ...staticRoutes,
    ...visibleProjects.map((project) => `projects/${project.slug}/`)
  ];
  const urls = routes
    .map((route) => `  <url><loc>${new URL(`${base}${route}`, origin)}</loc></url>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=UTF-8" }
  });
};
