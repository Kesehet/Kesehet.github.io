# Deployment

The site builds to static files in `dist/` and has no PHP requirement for normal rendering.

## GitHub Pages on `Kesehet/Kesehet.github.io`

The repository is a GitHub user site published at `https://kesehet.github.io/`.

The workflow in `.github/workflows/deploy.yml` automatically builds, validates, and deploys the site whenever `main` is pushed. It can also be started manually from the Actions tab.

To reproduce the production build locally:

   ```powershell
   $env:SITE_URL = "https://kesehet.github.io"
   $env:BASE_PATH = "/"
   npm ci
   npm run build
   npm run qa
   ```

In the repository, configure **Settings → Pages → Source** as **GitHub Actions**. Do not select a branch-based deployment because that invokes the Jekyll builder against the Astro source files.

## Custom domain

For `hamoodsiddiqui.com`:

1. Build with `SITE_URL=https://hamoodsiddiqui.com` and `BASE_PATH=/`.
2. Add a `public/CNAME` containing only `hamoodsiddiqui.com`.
3. Configure the DNS records recommended by the current GitHub Pages documentation.
4. Add the custom domain in Pages settings and enable HTTPS after DNS verification.
5. Rebuild so canonical, Open Graph, sitemap and JSON-LD URLs use the custom origin.
DNS targets and GitHub action versions should be checked against current official documentation at deployment time because they can change.

## Deployment verification

- Confirm every navigation route works with JavaScript disabled.
- Confirm direct loads of all generated project URLs.
- Confirm assets work from the root URL.
- Confirm the generated output contains no unsafe/withheld repository URLs.
- Run Lighthouse against production on mobile and desktop.
- Verify the social preview and canonical URLs with platform debuggers.
- Verify email, telephone and professional-profile links.
