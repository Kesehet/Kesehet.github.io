# Professional portfolio plan

## Goal

Position **Hamood Siddiqui** as a Python & Full-Stack Developer who builds backend systems, AI integrations, automation tools, and practical web applications. Game development appears as a secondary specialty.

Primary message:

> Python and Full-Stack Developer building backend systems, AI integrations, automation tools and practical web applications.

Hero direction:

> Backend, AI and full-stack systems built to solve real operational problems.

## Evidence-led project selection

### Featured

1. **AiSQL** - strongest current AI/backend/full-stack prototype; describe the CSV → SQLite → schema context → LLM/tool call → SQL/result flow. Status must remain “prototype,” and the repository link stays hidden until hardening.
2. **Local Speech-to-Text Workflow** - compact, current Python automation with an easy-to-explain local transcription/Discord delivery pipeline.
3. **Media Pitch Platform Work** - combine the PHP website, Laravel LLM/task service, and redesign evidence into one workstream. Keep contribution, dates, and public links as TODOs; do not reuse client assets.
4. **BookMyConsultation** - combine the Spring Boot API and React UI into an educational full-stack case study.
5. **Fill Masjid Ecosystem** - explain the React Native location prototype and WebRTC audio relay, clearly separating implemented code from the proposed SFU/Redis scaling plan. No repository link until credential/key cleanup.
6. **CafeClock** - include as a small kiosk-shell prototype, explicitly naming what is not yet implemented.

### Secondary and additional

- **Zombeez Game Jam:** secondary game-development section after role and asset licensing are confirmed.
- **HNS Movie Party:** experimental/additional case study with a security limitations section.
- **Custom File Manager:** security-learning archive only; not promoted.

### Excluded

- `3duverse-demo-platform`: empty.
- `TheGameEngine`: minimal demo with a committed virtual environment and misleading title.
- `supportpromax`: undocumented scripts with recorded audio.
- `masjids-list`: largely third-party scraper code plus high-risk scraped output.
- `mediapitch-redesign` as a standalone authored project: contribution is not verified.

## Information architecture

Static, multi-page routes:

- `/` - home in the required section order.
- `/projects/` - all visible projects with substantive summaries and filters that remain usable without JavaScript.
- `/projects/[slug]/` - detailed case study pages generated from structured data.
- `/about/` - working approach and verified positioning.
- `/experience/` - verified project experience plus guarded résumé TODO state; no invented employment.
- `/skills/` - capabilities grouped by outcomes and supported technologies.
- `/resume/` - HTML résumé; PDF download disabled until supplied/confirmed.
- `/contact/` - enhanced form with normal POST action, consent, honeypot, status UI, and privacy link.
- `/privacy/` - concise contact-form privacy notice.
- `/404.html` - custom static 404.

## Content architecture

Use `src/data/portfolio.ts` as the single editable source for:

- identity and social links;
- site metadata/config placeholders;
- capabilities;
- experience/resume TODOs;
- projects and case-study fields;
- visibility/link-safety states;
- media requirements.

Project URLs are rendered only when `visibility === "public"` and the specific link has been verified safe. TODO notes remain in data but are not rendered as marketing claims.

## Technical architecture

Use **Astro with static output**:

- Produces plain HTML and relative/static assets suitable for GitHub Pages.
- Generates case-study routes at build time.
- Keeps content and layout separate without shipping a large client runtime.
- Allows small isolated JavaScript enhancements for theme, navigation, project filters, and contact form states.
- Supports canonical URL and base-path configuration for `Kesehet/portfolio` now and `hamoodsiddiqui.com` later.

Configuration:

- `SITE_URL` - canonical origin, default placeholder `https://hamoodsiddiqui.com`.
- `BASE_PATH` - optional GitHub Pages repository base, default `/`.
- `PUBLIC_CONTACT_ENDPOINT` - public form endpoint; no credentials.

The contact form’s action is populated at build time. If the endpoint remains the example placeholder, the UI visibly disables sending rather than transmitting data to an unintended service.

## Visual direction

- Editorial engineering aesthetic: warm off-white/light and deep navy/dark surfaces, strong sans-serif typography, restrained teal accent, thin rules, code/data-inspired diagrams built in CSS.
- Large readable type, max-width text measure, generous vertical rhythm.
- Project cards contain problem, system, responsibility/status, and evidence - not only tags.
- Accessible light/dark modes with a simple persistent toggle.
- Subtle entrance/hover transitions only; all motion removed under `prefers-reduced-motion`.
- Mobile-first navigation; keyboard-visible focus; skip link; semantic landmarks.

## Contact architecture

Frontend:

- Required name, email, message, consent.
- Optional company and project type.
- Hidden honeypot using a real input outside normal focus/navigation.
- Normal `method="post"` and endpoint `action` for non-JavaScript fallback.
- JavaScript enhancement sends `FormData` with an `Accept: application/json` header and announces loading/success/error states.

Server example:

- PHP POST-only handler.
- Origin allowlist configured via environment.
- request/content-length limit;
- normalization, validation, header-injection defense, and honeypot handling;
- filesystem-backed basic rate limiting guidance/implementation;
- JSON response for enhanced clients and `303` redirect for browser fallback;
- SMTP library recommendation; no production secret or open CORS wildcard.

## SEO and structured data

- Unique title/description/canonical/Open Graph tags per route.
- Placeholder social preview designed for Hamood Siddiqui.
- Person and WebSite JSON-LD globally.
- SoftwareSourceCode/CreativeWork-style project JSON-LD only for verified public projects.
- `robots.txt` and generated/static sitemap.
- No fabricated `sameAs`, employer, rating, award, or usage metrics.

## Quality gates

- `astro check` and production build.
- HTML validation and internal broken-link scan against `dist`.
- Accessibility smoke tests using axe in browser automation.
- Responsive screenshots/checks at 320, 375, 768, 1024, and 1440 px.
- Keyboard navigation and visible focus review.
- Reduced-motion and color-scheme review.
- Secret scan of portfolio tracked files and generated bundle.
- Verify no private/unsafe project URL is present in generated HTML.
- Verify GitHub Pages base-path build and custom-domain root build.
- Lighthouse-oriented review: local fonts/system stack, minimal JS, width/height on images, no render-blocking third-party widgets.

## Review gates before publishing

1. Confirm résumé facts and provide the preferred public email.
2. Confirm Media Pitch dates, role, employer/client naming permission, and assets.
3. Rotate/remove leaked credentials and keys from affected repository histories.
4. Confirm project links and live demos that may be made public.
5. Confirm screenshots/videos and licensing.
6. Review generated content and build locally.
7. Only then create/push `Kesehet/portfolio`, configure Pages, and add the custom domain.

