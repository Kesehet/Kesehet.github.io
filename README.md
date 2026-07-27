# Hamood Siddiqui — professional portfolio

Static portfolio for **Hamood Siddiqui**, Python & Full-Stack Developer.

The portfolio presents nearly eight years of experience through focused project stories, major engineering challenges and practical implementation decisions.

## Stack

- Astro static output
- TypeScript content model
- Semantic HTML and custom CSS
- Small progressive-enhancement scripts only

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
```

- `SITE_URL` is the canonical origin used in metadata.
- `BASE_PATH` is `/` because this user site is published from `Kesehet/Kesehet.github.io`.

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

## Publication status

The public portfolio is deployed at `https://kesehet.github.io/`. Repository links that require security remediation or media approval remain withheld from the generated site.

See [PROJECT_AUDIT.md](PROJECT_AUDIT.md) and [CONTENT_TODOS.md](CONTENT_TODOS.md) for internal maintenance notes.
