You are working inside the GitHub account Kesehet, which belongs to
Hamood Siddiqui.

"Kesehet" is only the GitHub account handle. It must not be presented as
the developer's personal or professional name.

Use the following identity throughout the portfolio:

Name: Hamood Siddiqui
Professional title: Python & Full-Stack Developer
GitHub profile: https://github.com/Kesehet
LinkedIn: https://www.linkedin.com/in/hamood-siddiqui/

Use "Hamood Siddiqui" in:
- Page titles
- Headings
- Metadata
- Structured data
- Footer copyright
- Resume
- Contact section
- Social sharing information
- Author information
- Project case studies

Use "Kesehet" only where the literal GitHub username or repository path is
required. Do not use phrases such as "Kesehet's portfolio" or introduce the
developer as Kesehet.

Your task is to design and build a professional developer portfolio for Hamood
Siddiqui. The website's primary goal is to convince companies, agencies and
potential clients to contact me for software-development work.

Create Kesehet/portfolio as the source repository.

The public brand and displayed site name must be Hamood Siddiqui.

Configure the site so it can later use a custom domain such as:
hamoodsiddiqui.com

Do not expose the GitHub handle as the main site identity.

This is not a decorative personal homepage. It must clearly communicate:
1. What I build
2. Which business and technical problems I solve
3. Evidence that I can deliver working software
4. How a company can contact or hire me

Before modifying code, inspect the relevant repositories and produce an audit.

PRIMARY POSITIONING

Position me as:

"Python and Full-Stack Developer building backend systems, AI integrations,
automation tools and practical web applications."

Game development, Unity and VR should appear as a secondary specialty rather
than competing with the primary message.

SOURCE MATERIAL

Use:
- The repositories in the Kesehet GitHub account
- The supplied resumes
- Existing project READMEs, source files, package manifests, screenshots,
  releases and deployment configuration

Never invent:
- Features
- Metrics
- User counts
- Performance improvements
- Awards
- Employers
- Dates
- Production usage
- Technologies that are not verified in the repository or resume

When information conflicts, add a visible TODO in the content-data file rather
than guessing.

PHASE 1 - REPOSITORY AUDIT

Inspect these projects first:

1. Kesehet/aisql
2. Kesehet/kesehet-stt
3. Kesehet/mediapitch
4. Kesehet/mediapitch-redesign
5. Kesehet/llm-mediapitch
6. Kesehet/BookMyConsultation
7. Kesehet/BookMyConsultationUI
8. Kesehet/fillmasjid-azaan-server
9. Kesehet/masjids-list
10. Kesehet/AzaanNow
11. Kesehet/CafeClock
12. Kesehet/CustomFileManager
13. Kesehet/hns-movie-party
14. Kesehet/3duverse-demo-platform
15. Kesehet/Zombeez-Game-Jam
16. Kesehet/TheGameEngine
17. Kesehet/supportpromax

For every repository, determine:

- Purpose
- Actual technology stack
- Application architecture
- Major features supported by the code
- My likely contribution, but flag anything that cannot be verified
- Repository completeness
- Documentation quality
- Presence of screenshots or demo media
- Installation process
- Tests
- Deployment configuration
- Security concerns
- Whether it is safe and suitable to make public
- Whether it deserves Featured, Additional, Experimental or Excluded status

Create PROJECT_AUDIT.md containing the findings.

Do not expose secrets, environment variables, customer data, API keys, internal
URLs or proprietary code.

PHASE 2 - CONTENT MODEL

Create a structured data file such as:

data/portfolio.json

or:

src/data/portfolio.ts

The site content must be editable without changing layout code.

Each project record should support:

- slug
- title
- one-line value proposition
- concise description
- detailed case study
- category
- project status
- technologies
- business problem
- solution
- my role
- major features
- technical challenges
- architecture
- security considerations
- outcomes
- GitHub URL
- live demo URL
- video URL
- screenshots
- featured boolean
- visibility
- verification status
- TODO notes

Do not display private repository links to visitors.

PHASE 3 - WEBSITE STRUCTURE

Build these routes or sections:

1. Home
2. Projects
3. Individual project case-study pages
4. About
5. Experience
6. Skills
7. Resume
8. Contact
9. Privacy notice for the contact form
10. Custom 404 page

HOME PAGE ORDER

1. Navigation
2. Hero
3. Credibility statement
4. Featured projects
5. Capabilities/services
6. Work experience
7. Selected achievements
8. Secondary game/VR work
9. Contact call to action
10. Footer

HERO COPY DIRECTION

Use a direct headline similar to:

"Backend, AI and full-stack systems built to solve real operational problems."

Supporting text should explain that Hamood builds Python APIs, automation tools,
AI-enabled applications and production web platforms.

Primary button:
"View selected work"

Secondary button:
"Discuss a project"

Do not use phrases such as:
- Coding ninja
- Tech wizard
- Passionate programmer
- I turn coffee into code
- 10x developer

PROJECT SELECTION

Initially feature:

1. AiSQL
2. kesehet-stt
3. Media Pitch platform work
4. BookMyConsultation
5. Fill Masjid ecosystem
6. CafeClock

Add Custom File Manager, HNS Movie Party, 3Duverse and Zombeez as additional
projects only if the audit confirms they are presentable.

Each featured project must explain:
- The problem
- The users
- What I built
- How it works
- My responsibility
- Technical decisions
- Result or current status
- Repository/demo links
- What I learned or would improve

Do not create superficial cards containing only a title and technology tags.

DESIGN DIRECTION

Create a professional, modern, restrained design.

Requirements:
- Strong typography
- Clear visual hierarchy
- Generous spacing
- Responsive mobile-first layout
- Accessible contrast
- Keyboard navigation
- Visible focus states
- Reduced-motion support
- Dark and light mode, but only if implemented cleanly
- Subtle animation only
- No excessive gradients
- No animated skill bars
- No fake terminal intro
- No loading screen
- No background music
- No unnecessary 3D effects
- No carousel for essential content

The visual tone should suit engineering managers, startup founders and technical
recruiters.

TECHNICAL REQUIREMENTS

The public portfolio must work on GitHub Pages.

The generated static entry point must ultimately provide:
- index.html
- valid relative asset paths
- GitHub Pages-compatible routing
- no PHP dependency for normal page rendering

Use the existing repository stack if one already exists and is appropriate.
Otherwise use a simple, maintainable static stack.

Preferred choices:
- Astro with static output, or
- Vite with static HTML/JavaScript, or
- Plain semantic HTML/CSS/JavaScript if that produces a cleaner result

Avoid adding a heavy framework without a clear reason.

CONTACT FORM ARCHITECTURE

The portfolio is hosted statically, but the contact form must submit to my
separate PHP server.

Place the endpoint in one environment/configuration value, for example:

CONTACT_ENDPOINT=https://api.example.com/contact.php

Requirements:
- Name
- Email
- Company, optional
- Project type, optional
- Message
- Consent checkbox
- Honeypot field
- Loading state
- Success state
- Useful error state
- Server-side validation expected
- No secrets in frontend code

Support a normal HTML POST fallback where practical.

Do not implement an insecure open CORS policy.
Do not place SMTP credentials or API secrets in the frontend.
Document the required PHP endpoint contract in CONTACT_API.md.

Create an example secure PHP handler separately in:
server-example/contact.php

The handler should include:
- POST-only enforcement
- Input normalization and validation
- Header-injection protection
- Honeypot processing
- Request-size limits
- Origin allowlist
- Basic rate-limiting guidance
- Secure SMTP recommendation
- JSON and redirect response options
- No hard-coded production secrets

SEO AND SHARING

Add:
- Accurate page titles
- Meta descriptions
- Canonical URL placeholder
- Open Graph metadata
- Social preview image placeholder
- robots.txt
- sitemap.xml
- Person and WebSite structured data
- Project structured data where appropriate

Do not keyword-stuff.

RESUME

Add a resume page and download button.

Do not publish a telephone number by default.
Use email, GitHub, LinkedIn and the contact form.

Before finalizing resume content, flag these conflicts for confirmation:
- 3+ years versus 5+ years
- Media Pitch start date: July 2021 versus January 2023
- Whether the Liverpool John Moores University MSc is completed and should appear
- Exact current employment status

SECURITY AND PRIVACY REVIEW

Before creating any public link:
- Scan tracked files for API keys, secrets and credentials
- Check gitignored files
- Check generated bundles
- Review contact-form handling
- Review file upload code in showcased applications
- Do not copy client data or proprietary assets into the portfolio
- Do not make private repositories public automatically

TESTING

Add:
- Responsive checks
- Accessibility checks
- Broken-link checks
- HTML validation
- Basic Lighthouse-oriented optimization
- Build verification
- GitHub Pages deployment verification

Make sure:
- Navigation works without JavaScript where possible
- All project links are valid
- Images include alt text
- Forms have labels
- The site works at narrow mobile widths
- The site does not depend on a local development server

DELIVERABLES

Produce:

1. PROJECT_AUDIT.md
2. PORTFOLIO_PLAN.md
3. Content data file
4. Complete portfolio implementation
5. README.md with local setup
6. DEPLOYMENT.md for GitHub Pages and custom-domain setup
7. CONTACT_API.md
8. server-example/contact.php
9. Resume-content TODO list
10. Screenshot/media requirements list for every featured project
11. A final QA report

WORKFLOW

1. Audit before coding.
2. Present the proposed project selection and architecture.
3. Implement on a new branch named:
   feat/professional-portfolio
4. Commit in logical stages.
5. Do not overwrite unrelated work.
6. Do not publish or merge until the build and content have been reviewed.
7. Clearly list all remaining placeholders and unverifiable claims.

The final result should make a company think:

"This developer has built real systems, understands backend and product work,
can explain technical decisions clearly, and is easy to contact."
