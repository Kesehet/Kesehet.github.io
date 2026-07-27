# Hamood Siddiqui — professional portfolio

Static portfolio for **Hamood Siddiqui**, Python & Full-Stack Developer.

The portfolio is evidence-led: project stories are generated from structured data, lead with the major engineering problem tackled, and distinguish repository-verified implementation from unconfirmed context or proposed future architecture.

## Stack

- Astro static output
- TypeScript content model
- Semantic HTML and custom CSS
- Small progressive-enhancement scripts only
- Separate PHP/SMTP contact endpoint example

## Local setup

Requirements:

- Node.js 20 or newer
- npm 10 or newer

```powershell
npm install
Copy-Item .env.example .env
npm run dev
```

Open the local URL printed by Astro.

## Environment values

```text
SITE_URL=https://kesehet.github.io
BASE_PATH=/
PUBLIC_CONTACT_ENDPOINT=https://api.example.com/contact.php
```

- `SITE_URL` is the canonical origin used in metadata.
- `BASE_PATH` is `/` because this user site is published from `Kesehet/Kesehet.github.io`.
- `PUBLIC_CONTACT_ENDPOINT` is intentionally public configuration. It contains no secret.

When the contact endpoint is still `api.example.com`, the form is visibly disabled.

## Content editing

Edit [src/data/portfolio.ts](src/data/portfolio.ts). Layout code should not contain project claims.

Every project supports:

- slug, title and value proposition;
- detailed case study and category;
- factual status label;
- major engineering feat;
- problem, users, solution and role evidence;
- features, challenges and architecture;
- security considerations, outcomes, evidence, lessons and next steps;
- links with independent public-safety flags;
- media with screenshot/concept/diagram labels;
- visibility, verification state and internal TODO notes.

Concept visuals are explicitly captioned as concepts. They are not represented as original product screenshots.

## Build and checks

```powershell
npm run check
npm run build
npm run qa
```

The QA script validates generated HTML, checks internal links/assets, verifies image alt text through HTML validation, scans tracked text and generated bundles for high-risk secret patterns, and confirms withheld repository URLs are absent from output.

Browser-based responsive and axe checks are documented in `FINAL_QA.md`.

## Contact server

See [CONTACT_API.md](CONTACT_API.md) and [server-example/contact.php](server-example/contact.php). The static frontend never contains SMTP credentials.

## Publication status

Do not publish or merge until:

1. résumé conflicts are resolved;
2. the public email is confirmed;
3. exposed credentials/keys in audited repositories are rotated and removed;
4. client/project media permission is confirmed;
5. generated content and case-study wording are reviewed.

See [PROJECT_AUDIT.md](PROJECT_AUDIT.md), [PORTFOLIO_PLAN.md](PORTFOLIO_PLAN.md), and [CONTENT_TODOS.md](CONTENT_TODOS.md).
