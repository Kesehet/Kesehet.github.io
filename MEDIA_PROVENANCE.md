# Media provenance

Portfolio visuals must be distinguishable as one of:

- **Actual screenshot:** captured from a repository build without altering the interface or adding data.
- **Interface concept:** generated from verified capabilities to communicate a possible polished presentation; never represented as the original UI.
- **Architecture diagram:** created natively for the portfolio and labelled current or proposed.

## AiSQL

### `public/images/projects/screenshots/aisql-repository-ui.png`

- Type: actual screenshot.
- Source: committed `build/` directory from `Kesehet/aisql`, default branch inspected on 27 July 2026.
- Capture: local static HTTP server at 1440 × 360.
- State: initial database setup; no CSV was uploaded and no customer/client data was used.
- Editing: none.

### `public/images/projects/concepts/aisql-interface-concept.png`

- Type: generated interface concept.
- Generator: built-in OpenAI image generation tool.
- Purpose: show the repository-verified CSV → database → question → generated SQL → result/chart workflow in a portfolio-friendly composition.
- Synthetic data only.

Final prompt:

> Use case: ui-mockup. Asset type: portfolio case-study interface concept for AiSQL. Create a polished desktop web application interface concept based only on these verified capabilities: importing CSV files into a named SQLite database, asking a natural-language data question, displaying generated read-only SQL, showing a result table and a restrained bar chart. Straight-on browser-style application canvas, no device mockup. High-fidelity modern SaaS dashboard, restrained and credible. 16:10 landscape with database/tables sidebar, question input, generated SQL, result table and compact chart. Warm off-white, deep navy, muted teal and soft gray. Visible labels: “AiSQL”, “Database”, “Import CSV”, “Ask your data”, “Show monthly order totals”, “Generated SQL”, “Results”. Use only synthetic generic data; no metrics, user counts, production claims, client data, keys or watermark.

## BookMyConsultation

### `public/images/projects/concepts/bookmyconsultation-interface-concept.png`

- Type: generated interface concept.
- Generator: built-in OpenAI image generation tool.
- Purpose: communicate the verified doctor discovery → availability → booking → rating-action workflow.
- Synthetic names and scheduling data only.
- A first generated candidate was rejected because it introduced unverified experience and review metrics. The retained version contains no such metrics.

Final prompt:

> Use case: ui-mockup. Asset type: revised portfolio case-study interface concept for BookMyConsultation. Create a polished desktop healthcare scheduling interface based only on verified repository capabilities: browse doctors, filter by specialty, view availability, select a time slot, book an appointment and access a rating action. Straight-on browser-style canvas, calm and professional. 16:10 landscape with search/filter and doctor cards on the left, selected doctor and available appointments in the center, and “Rating available after appointment” with no score. Warm white, deep navy, muted teal and pale blue-gray. Visible labels: “BookMyConsultation”, “Find a doctor”, “Specialty”, “Available appointments”, “Book appointment”, “Your appointments”, “Rating available after appointment”. Synthetic names only. Absolutely no years of experience, review counts, star scores, numerical ratings, user counts, metrics, testimonials, patient data, medical claims, phone numbers, production claims or watermarks.

## Media still required

See `CONTENT_TODOS.md` for approved screenshots, demos and licensing checks still needed for every featured project.
