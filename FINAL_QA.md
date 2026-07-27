# Final QA report

QA date: 27 July 2026  
Branch: `feat/professional-portfolio`  
Publication: not published or merged

## Result

The static portfolio builds successfully for both:

- custom-domain root deployment (`SITE_URL=https://hamoodsiddiqui.com`, `BASE_PATH=/`);
- repository-scoped GitHub Pages (`SITE_URL=https://kesehet.github.io`, `BASE_PATH=/portfolio/`).

The final `dist/` was restored to the custom-domain/root configuration after the Pages test.

## Automated checks

### Astro and TypeScript

Command:

```text
npm run build
```

Result:

- 0 errors
- 0 warnings
- 0 hints
- 17 HTML pages generated plus `robots.txt` and `sitemap.xml`

### HTML and internal links

Command:

```text
npm run qa
```

Result:

- 17 generated HTML files passed `html-validate`.
- Local `href` and `src` targets resolved.
- Image alternative text and form-label rules passed.
- The generated output contains none of the explicitly withheld AiSQL, Media Pitch or Fill Masjid repository URLs.
- High-risk tracked/generated secret patterns were not found.

The same QA command passed against the `/portfolio/` base-path build.

### Responsive browser checks

Command:

```text
npm run qa:browser
```

Result:

- No horizontal overflow at 320, 375, 768 or 1440 px.
- Captured viewport renders for visual review.
- Mobile and desktop hero hierarchy reviewed visually.
- Mobile navigation remains available when JavaScript is disabled.

### Accessibility

`@axe-core/playwright` reported no violations on:

- home;
- projects index;
- AiSQL case study;
- contact.

Additional implemented accessibility measures:

- semantic landmarks and headings;
- skip link;
- visible focus treatment;
- keyboard-operable navigation and controls;
- labelled form fields and live form status;
- accessible color contrast palette;
- reduced-motion override;
- usable no-JavaScript mobile navigation;
- dark/light color mode.

This is an automated and implementation review, not a formal third-party WCAG conformance audit.

### Dependency security

Command:

```text
npm audit --audit-level=high
```

Result: **0 known vulnerabilities** after upgrading to Astro 7.1.4, current Sharp-compatible dependencies and `html-validate` 11.5.6.

### PHP contact example

Command:

```text
php -l server-example/contact.php
```

Result: no syntax errors.

The handler includes POST-only enforcement, exact origin allowlisting, body and field limits, normalization, email validation, CR/LF injection defense, honeypot handling, filesystem rate limiting, authenticated SMTP through PHPMailer, JSON responses and 303 redirect responses.

## Visual/media verification

- AiSQL interface concept: generated from verified features and labelled as a concept.
- BookMyConsultation interface concept: generated from verified workflows and labelled as a concept.
- The first BookMyConsultation candidate was rejected because it introduced unverified experience/review metrics.
- AiSQL actual screenshot: captured from the committed repository build with no uploaded data and no interface alteration.
- Media captions and `MEDIA_PROVENANCE.md` distinguish concepts from actual screenshots.

## SEO and sharing

Verified:

- unique page titles and descriptions;
- canonical URLs;
- Open Graph and Twitter metadata;
- Person and WebSite JSON-LD;
- project structured data only for link-safe public projects;
- generated `robots.txt` and `sitemap.xml`;
- base-path-aware metadata for GitHub Pages;
- custom social-preview asset.

## Contact/privacy behavior

- Form is disabled while the endpoint remains the example placeholder.
- Endpoint is configured in one public build value.
- Normal HTML POST markup remains in place for fallback.
- JavaScript enhancement provides loading, success and error announcements.
- Required consent and privacy notice are present.
- Frontend bundles contain no SMTP credentials or secrets.

## Performance-oriented review

- Static HTML output; no client framework runtime.
- Small progressive-enhancement scripts only.
- No third-party widgets, remote font requests, video backgrounds, carousels or 3D effects.
- Images have explicit dimensions and lazy loading where appropriate.
- System font stack avoids a render-blocking font dependency.
- Production Lighthouse should still be run from the final deployed URL because network, caching and CDN behavior cannot be measured locally.

## Remaining launch blockers

1. Confirm a public email and production contact endpoint.
2. Reconcile all résumé conflicts in `CONTENT_TODOS.md` and provide the approved PDF.
3. Confirm Media Pitch dates, role and media permission.
4. Rotate/remove credentials and key material identified in audited repositories before linking them.
5. Confirm Fill Masjid naming/role/current status.
6. Confirm Zombeez team role and asset licensing.
7. Obtain or capture the remaining project media listed in `CONTENT_TODOS.md`.
8. Review all copy and concept visuals with Hamood.
9. Only after review: create/push `Kesehet/portfolio`, configure Pages and add the custom domain.
