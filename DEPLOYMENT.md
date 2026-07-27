# Deployment

The site builds to static files in `dist/` and has no PHP requirement for normal rendering.

## GitHub Pages on `Kesehet/portfolio`

The GitHub repository is intentionally not created or published until content and security review.

After approval:

1. Create the repository as `Kesehet/portfolio`.
2. Push the reviewed `feat/professional-portfolio` branch and merge through the chosen review process.
3. Build with:

   ```powershell
   $env:SITE_URL = "https://kesehet.github.io"
   $env:BASE_PATH = "/portfolio/"
   $env:PUBLIC_CONTACT_ENDPOINT = "https://your-approved-api-host/contact.php"
   npm ci
   npm run build
   npm run qa
   ```

4. Deploy `dist/` through a GitHub Actions Pages workflow using the official `actions/configure-pages`, `actions/upload-pages-artifact`, and `actions/deploy-pages` actions pinned to reviewed versions.
5. Configure repository Settings → Pages → GitHub Actions.
6. Verify `/portfolio/`, project detail routes, assets, the 404 page and form endpoint from the production URL.

No GitHub workflow is included yet because action versions and repository publication are part of the final review gate.

## Custom domain

For `hamoodsiddiqui.com`:

1. Build with `SITE_URL=https://hamoodsiddiqui.com` and `BASE_PATH=/`.
2. Add a `public/CNAME` containing only `hamoodsiddiqui.com`.
3. Configure the DNS records recommended by the current GitHub Pages documentation.
4. Add the custom domain in Pages settings and enable HTTPS after DNS verification.
5. Rebuild so canonical, Open Graph, sitemap and JSON-LD URLs use the custom origin.
6. Update the contact API origin allowlist to include only the exact HTTPS site origins in use.

DNS targets and GitHub action versions should be checked against current official documentation at deployment time because they can change.

## Contact API

The PHP endpoint is deployed separately over HTTPS. Set:

```text
PUBLIC_CONTACT_ENDPOINT=https://api.your-domain.example/contact.php
```

Frontend configuration is not secret. SMTP host, username, password, recipient, origin allowlist and rate-limit directory live only on the PHP server.

## Deployment verification

- Confirm every navigation route works with JavaScript disabled.
- Confirm direct loads of all generated project URLs.
- Confirm assets work under `/portfolio/` and `/`.
- Confirm the generated output contains no unsafe/withheld repository URLs.
- Confirm the endpoint rejects unapproved origins and non-POST methods.
- Confirm JSON and redirect form responses.
- Run Lighthouse against production on mobile and desktop.
- Verify the social preview and canonical URLs with platform debuggers.
- Verify HTTPS before accepting contact submissions.
