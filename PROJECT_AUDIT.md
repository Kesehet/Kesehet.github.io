# Project audit

Audit date: 27 July 2026  
Account inspected: `Kesehet` (GitHub handle only)  
Portfolio identity: Hamood Siddiqui

## Scope and method

This audit covers the 17 repositories named in `requirements.md`. Findings are based on the default branch, tracked file tree, recent commit metadata, READMEs, package manifests, representative source, test folders, deployment files, and media inventories. It is a portfolio-suitability review, not a production penetration test.

No secret values, customer records, or proprietary assets are reproduced here. A public repository is not automatically safe to promote. “Verified” means supported by repository evidence; it does not prove sole authorship, production usage, or business outcomes.

## Immediate security actions

1. **Rotate and remove tracked credentials in `mediapitch`.** A tracked PHP file contains live-looking third-party messaging credentials and personal contact data. Treat them as compromised, rotate them, remove them from current files and Git history, and add secret scanning.
2. **Rotate and remove Fill Masjid key material.** `fillmasjid-azaan-server` tracks certificate/private-key-style files and TURN credentials/configuration. Replace exposed credentials and certificates, remove them from history, and load replacements from a secret manager or protected host configuration.
3. **Do not link the affected repositories from the public portfolio** until remediation is confirmed.
4. Add authentication, authorization, rate limits, size limits, and safer upload/storage boundaries before deploying `CustomFileManager`, `hns-movie-party`, or AiSQL publicly.
5. Remove recorded audio, scraped datasets, generated output, local databases, executables, virtual environments, build output, and client-owned media where they are not intentionally licensed public artifacts.

## Selection summary

| Repository/group | Evidence-backed portfolio status | Public-link decision |
| --- | --- | --- |
| AiSQL | Featured, clearly labelled prototype | Link only after security hardening |
| `kesehet-stt` | Featured, local automation utility | Repository link can be shown; remove sample recording first |
| Media Pitch repositories | Featured as one workstream, ownership/status TODO | Withhold links pending credential cleanup and role confirmation |
| BookMyConsultation + UI | Featured educational full-stack case study | Public repository links may be shown |
| Fill Masjid ecosystem | Featured case study with security caveat | Withhold server/list-data links pending cleanup |
| CafeClock | Featured prototype, not a completed kiosk platform | Public repository link may be shown with prototype status |
| Zombeez Game Jam | Secondary game-development work | Public repository link may be shown after asset-licensing confirmation |
| HNS Movie Party | Experimental/additional | Withhold live demo; repository link optional after warning/README |
| Custom File Manager | Experimental, security learning project | Do not promote until hardened |
| 3Duverse demo platform | Excluded | Empty repository |
| TheGameEngine | Excluded | Minimal demo with committed virtual environment |
| `supportpromax` | Excluded for now | Insufficient documentation and tracked audio |

## Repository findings

### 1. AiSQL — `Kesehet/aisql`

- **Purpose:** Upload CSV data, create a local SQLite database, ask natural-language questions, generate/execute SQL, and render results/charts.
- **Verified stack:** Python, Flask, Waitress, SQLite, pandas, Ollama, Google Generative AI integration, React/Create React App, PrimeReact, Chart.js-related frontend utilities.
- **Architecture:** Flask serves a compiled React app and JSON endpoints. Python modules inspect SQLite schema, call an LLM with tool definitions, execute queries, and return tabular results. The browser uploads CSV text and manages query cards/chart views.
- **Verified features:** multi-file CSV ingestion; SQLite table creation; schema inspection; natural-language question flow; local Ollama or Gemini path; SQL execution; generated question suggestions; chart-oriented response handling.
- **Likely contribution:** Commit metadata and the account ownership support Hamood’s involvement, but the repository does not document collaborators or exact role. Mark role as **needs confirmation**.
- **Completeness/docs/install:** Working prototype structure and a committed frontend build are present. The only README is the default Create React App text. Root dependency metadata is incomplete/inconsistent; the React package file is nested while the root `package.json` only contains a development dependency. No purpose-specific setup guide.
- **Tests/deployment/media:** A CRA placeholder test and a root `test.py` exist; meaningful automated coverage is not verified. Shell scripts and Waitress startup exist, but no CI or production infrastructure. Four app/logo images are present; no explanatory product screenshots.
- **Security:** Open CORS; arbitrary database names can affect filesystem paths; raw SQL execution lacks an enforced read-only boundary; detailed tracebacks can be returned; upload/request limits and authentication are absent; in-memory cache is unbounded. Do not expose as an open public demo.
- **Suitability:** **Featured prototype**, after hardening or with repository link withheld. Strong evidence for backend/AI integration, but outcomes and production usage are unverified.

### 2. kesehet-stt — `Kesehet/kesehet-stt`

- **Purpose:** Hotkey-controlled desktop speech recording, local Whisper transcription, and Discord webhook delivery.
- **Verified stack:** Python, `faster-whisper`, CTranslate2/ONNX Runtime, NumPy, SoundDevice/SoundFile, pynput, Requests, dotenv.
- **Architecture:** A keyboard listener controls an audio recorder; a background worker transcribes queued WAV files locally and posts text to a configured Discord webhook.
- **Verified features:** configurable model/language/beam size/audio device; voice activity filtering; background queue; error handling for webhook delivery; CPU/int8 defaults.
- **Likely contribution:** Account ownership and commits support direct involvement; exact solo/team role is not documented.
- **Completeness/docs/install:** Compact functional utility with pinned dependencies, `.env.example`, and start script. No README or platform-specific setup/troubleshooting.
- **Tests/deployment/media:** No automated tests or packaged release. Desktop/local execution only. A sample WAV is tracked; do not reuse it without explicit consent.
- **Security/privacy:** Webhook is environment-configured and ignored correctly. Transcripts leave the machine when sent to Discord. The recorded WAV is overwritten but not automatically removed.
- **Suitability:** **Featured utility.** Present as local automation, not a hosted speech platform. Add README, consent/privacy notes, tests, and remove the tracked recording.

### 3. Media Pitch website — `Kesehet/mediapitch`

- **Purpose:** Public service-company website plus a newer local/private book profit tracker and a chatbot integration.
- **Verified stack:** PHP, HTML, CSS, JavaScript, JSON content, SQLite for the analytics tool, Google Analytics; chatbot PHP files are present.
- **Architecture:** Server-rendered PHP pages share includes and JSON content. The analytics sub-application is a single-file PHP/SQLite tracker for print batches, orders, returns, expenses, stock, CSV export, and backups.
- **Verified features:** multi-page company site; service content; contact page; analytics/book-profit tracking; chatbot-related modules.
- **Likely contribution:** Commits under the account support contribution. Exact employment context, start date, scope, and ownership of client assets are **not verified**.
- **Completeness/docs/install:** Main site has no project README. The analytics README clearly states local/private use and no authentication. Installation/deployment documentation is otherwise weak.
- **Tests/deployment/media:** No automated tests or CI verified. Extensive company/client imagery exists but must not be copied into this portfolio without rights confirmation.
- **Security:** **Critical:** tracked third-party messaging credentials and personal data were found. The analytics app has no login and places SQLite under the web tree. Shelling out to cURL and collecting visitor information increase risk. Do not promote or deploy from this state.
- **Suitability:** **Featured workstream only after cleanup and role/asset approval.** No repository link until credential rotation and history remediation are confirmed.

### 4. Media Pitch redesign — `Kesehet/mediapitch-redesign`

- **Purpose:** Modern redesign of the Media Pitch marketing site.
- **Verified stack:** Next.js 15, React 19, Tailwind CSS, Radix UI, Framer Motion/Motion, Lucide/React Icons, Swiper.
- **Architecture:** Next.js App Router pages with reusable header/footer/home components and static assets.
- **Verified features:** home, about, services, and contact routes; responsive navigation/components; animated reveal/carousel code.
- **Likely contribution:** The inspected history contains one commit authored by another named account. Hamood’s specific contribution is **unverified** and must not be claimed without confirmation.
- **Completeness/docs/install:** Build scripts and default Next.js README exist. No project-specific content or architecture documentation.
- **Tests/deployment/media:** No tests found. A GitHub Actions workflow builds and uploads static output over FTP using repository secrets; it also exposes a server address in configuration. Static export compatibility should be rechecked.
- **Security/assets:** Secret references are appropriately stored as Actions secrets, but server details and client imagery should not be reused. Dependency and action versions need maintenance.
- **Suitability:** **Supporting evidence only**, not an authored case study until contribution is confirmed.

### 5. LLM Media Pitch — `Kesehet/llm-mediapitch`

- **Purpose:** Laravel service coordinating LLM/Whisper tasks and machine instances.
- **Verified stack:** PHP 8, Laravel 9, Sanctum, Socialite, Eloquent migrations, Vite, Axios.
- **Architecture:** API routes create/poll/update tasks; service classes cover instances, tunnels, and notifications; models/migrations represent tasks and machines; Google OAuth routes are present.
- **Verified features:** LLM and Whisper endpoints; queued task lifecycle endpoints; stuck-task cleanup; machine records; Google OAuth flow.
- **Likely contribution:** Account commits support involvement, but role and relationship to the commercial platform need confirmation.
- **Completeness/docs/install:** Substantial scaffold and domain code, but README is unchanged Laravel boilerplate.
- **Tests/deployment/media:** Only framework example tests; no feature-specific tests, screenshots, or deployment config verified.
- **Security:** Several operational API routes appear outside the commented Sanctum group; test/cleanup/all-task routes need authentication and authorization review. Tunnel/instance services require a secrets review.
- **Suitability:** Combine into the **Media Pitch workstream** after access-control review. Do not imply production usage.

### 6. BookMyConsultation API — `Kesehet/BookMyConsultation`

- **Purpose:** Backend for doctor discovery, authentication, appointments, and ratings.
- **Verified stack:** Java 8, Spring Boot 2.5, Spring Web, Spring Data JPA, MySQL, JWT, Swagger/Springfox, Maven, Actuator.
- **Architecture:** Conventional controller/service/repository/entity layers with JWT provider classes, validation/error responses, SQL seed/load script, and REST endpoints.
- **Verified features:** user registration/authentication; doctors and availability; appointment booking; ratings; token persistence/verification; API documentation configuration.
- **Likely contribution:** Repository ownership supports involvement. Package names and supplied answer/project PDFs suggest a course/capstone project; present it as educational unless independently confirmed otherwise.
- **Completeness/docs/install:** Purpose-specific README, Maven wrapper, SQL load script, Postman collection, and layered implementation are present. Instructions contain typos and old version assumptions.
- **Tests/deployment/media:** Only a context-load test was found. No CI, container, or production deployment config. A PDF is present but should not be republished automatically.
- **Security:** A database password value is tracked in application properties; rotate if ever reused and replace with environment configuration. Spring Security is commented out while custom JWT code is used. Dependencies are dated.
- **Suitability:** **Featured educational full-stack case study**, paired with the UI. Good architecture evidence; no business outcomes should be claimed.

### 7. BookMyConsultation UI — `Kesehet/BookMyConsultationUI`

- **Purpose:** React client for the consultation API.
- **Verified stack:** React 17, Redux, Redux Thunk/Persist, React Router, Material UI, Axios, React Hook Form, date-fns.
- **Architecture:** Screen-based React app with a shared HTTP service, Redux store/reducers, authentication dialogs, doctor list/details, booking, appointments, and rating screens.
- **Verified features:** login/register; doctor browsing/details; appointment booking and viewing; appointment rating; persisted client state.
- **Likely contribution:** Same educational-project caveat as the API.
- **Completeness/docs/install:** Runnable CRA structure and a short setup section. The README command `node i` appears to be an error for `npm i`.
- **Tests/deployment/media:** CRA placeholder test only. No CI/deployment. A logo and project PDF exist; no polished workflow screenshots.
- **Security:** Old Axios/React tooling requires dependency review. Confirm token storage/refresh/logout behavior before any live deployment.
- **Suitability:** **Featured with the API** as one case study.

### 8. Fill Masjid Azaan server — `Kesehet/fillmasjid-azaan-server`

- **Purpose:** Audio-only one-to-many WebRTC relay/signaling server.
- **Verified stack:** Node.js, Express, `wrtc`, HTTPS, CORS, PM2 tooling, coturn configuration, Linux bootstrap shell script.
- **Architecture:** In-memory broadcast registry; one server-side peer connection per consumer; HTTPS server; broadcaster/consumer signaling endpoints. Planning documents propose a future stateless signaling + Redis/Postgres + SFU architecture, but that target is not implemented evidence.
- **Verified features:** broadcast creation; listener attachment; peer cleanup; status listing; constrained CORS; VM bootstrap and firewall/service setup.
- **Likely contribution:** Account commits and recent authored deployment work support involvement; exact organization/client role remains unverified.
- **Completeness/docs/install:** Runnable core and unusually detailed scaling/VM planning docs, but package scripts/tests are missing. A binary/archive and duplicated server file are tracked.
- **Tests/deployment/media:** No implemented unit, smoke, load, or media tests despite proposed test plans. No screenshots. The bootstrap script configures host services and PM2.
- **Security:** **Critical:** certificate/private-key-style files and TURN credentials/config are tracked. Signaling endpoints have no visible authentication or rate limiting. Request limits and robust schema validation are absent. Some operational addresses are hard-coded.
- **Suitability:** **Featured architecture case study only after secrets remediation.** Clearly distinguish current implementation from proposed scaling work; never present planning capacity estimates as measured outcomes.

### 9. Masjids list — `Kesehet/masjids-list`

- **Purpose:** Use a Google Maps scraping tool to enumerate masjids from Indian postal-address queries.
- **Verified stack:** Python, pandas, Botasaurus/Selenium-style scraping, Docker/Compose.
- **Architecture:** A lightly modified entry script builds pincode-based queries and invokes a third-party Google Maps scraper codebase.
- **Verified features:** pincode query generation; selected location fields; Docker execution; large cached/output corpus.
- **Likely contribution:** The README and most code identify `omkarcloud/google-maps-scraper` as the original project. Hamood’s modification appears centered on masjid query/data generation; exact changes require comparison with upstream.
- **Completeness/docs/install:** Upstream documentation is extensive, but project-specific documentation is absent. More than 9,000 tracked files include cache, output, logs, bytecode, scraped CSV/JSON, and screenshots.
- **Tests/deployment/media:** No project-specific tests. Docker config exists.
- **Security/privacy/legal:** Tracked scraped output may contain contact/location data and should not be copied. Confirm Google Maps terms, data provenance, consent, and licensing. `local_storage.json`, profiles, caches, and logs require review.
- **Suitability:** **Excluded from public portfolio for now.** It does not provide clean evidence of original implementation and carries data/licensing risk.

### 10. AzaanNow — `Kesehet/AzaanNow`

- **Purpose:** Mobile prototype that requests device location and sorts a masjid dataset by distance.
- **Verified stack:** React Native, Expo 40, Expo Location, Geolib.
- **Architecture:** Single React Native component requests permission/location, computes distance to in-memory records, sorts, and renders a list.
- **Verified features:** location permission/error flow; geospatial distance calculation; nearest-first list.
- **Likely contribution:** Account ownership supports involvement; exact dataset source and relationship to later Fill Masjid work need confirmation.
- **Completeness/docs/install:** Minimal prototype; the tracked dataset is empty in the component. No README.
- **Tests/deployment/media:** No tests, releases, screenshots, or deployment config.
- **Security/privacy:** Uses precise location; a future release needs a privacy explanation and current permission APIs.
- **Suitability:** **Experimental supporting project** within the Fill Masjid case study, not standalone featured work.

### 11. CafeClock — `Kesehet/CafeClock`

- **Purpose:** Electron kiosk-mode shell with a gaming-café login mockup.
- **Verified stack:** Electron 26, HTML/CSS/JavaScript.
- **Architecture:** A BrowserWindow loads a local login page in kiosk/always-on-top mode and registers global shortcuts.
- **Verified features:** full-screen kiosk window; menu hiding; shortcut blocking; login visual.
- **Likely contribution:** Account commit supports involvement, but business requirements and role are undocumented.
- **Completeness/docs/install:** Six-file prototype. Login inputs have no form handler, backend, session/time tracking, billing, or access control.
- **Tests/deployment/media:** Test script intentionally fails; no packaging/deployment config. One background image is present; its license is unverified.
- **Security:** `nodeIntegration: true` is unnecessary and unsafe for untrusted content. Escape exits the app and developer tools open by default.
- **Suitability:** **Featured only as a transparent prototype** if the intended problem and responsibility are confirmed. Do not describe it as a working café management system.

### 12. Custom File Manager — `Kesehet/CustomFileManager`

- **Purpose:** FastAPI service for uploading blobs to SQLite and downloading them by numeric ID.
- **Verified stack:** Python, FastAPI, Uvicorn, SQLite, HTML form.
- **Architecture:** Uploads are written to disk, stored as database blobs, then recreated on download.
- **Verified features:** multipart upload; SQLite blob storage; ID-based download.
- **Likely contribution:** Account ownership/README support direct involvement.
- **Completeness/docs/install:** README and schema instructions exist, but dependency manifest and tests are absent. A local database is tracked.
- **Tests/deployment/media:** No tests or current deployment configuration; old Replit URL appears in docs.
- **Security:** Explicitly unauthenticated; original filenames can cause path traversal/overwrite; no type/size/quota scanning; public object IDs are enumerable; duplicate disk/database storage can exhaust resources; error handling is broad.
- **Suitability:** **Experimental/security-learning project; do not promote or deploy** until redesigned.

### 13. HNS Movie Party — `Kesehet/hns-movie-party`

- **Purpose:** Synchronized HLS watch-party prototype with upload support.
- **Verified stack:** Python, Flask, Flask-SocketIO, Video.js, HLS.js, Bootstrap.
- **Architecture:** Server keeps current video/play state in memory and broadcasts host timestamps over Socket.IO; clients correct drift and stream local HLS segments.
- **Verified features:** video listing; HLS playback; host selection; periodic state synchronization; drift correction; `.m3u8`/`.ts` upload.
- **Likely contribution:** Account commit supports involvement; exact collaborators are undocumented.
- **Completeness/docs/install:** Core prototype and pinned requirements exist, but no README. Large Windows binaries for FFmpeg/ngrok are tracked.
- **Tests/deployment/media:** No tests or production deployment. No screenshots.
- **Security:** Hard-coded Flask secret; wildcard Socket.IO origins; no auth or host authorization; unauthenticated upload; no aggregate size/quota control; development server is allowed in an unsafe mode.
- **Suitability:** **Experimental/additional** after a security-focused README. No live demo in current state.

### 14. 3Duverse demo platform — `Kesehet/3duverse-demo-platform`

- **Purpose/stack/features:** Not verifiable. The default branch contains only `.gitkeep`.
- **Completeness/docs/tests/deployment/media/security:** Empty repository; nothing to install or assess.
- **Suitability:** **Excluded.**

### 15. Zombeez Game Jam — `Kesehet/Zombeez-Game-Jam`

- **Purpose:** GameMaker action/platform game-jam project.
- **Verified stack:** GameMaker project (`.yyp`, `.yy`) and GML.
- **Architecture:** Room/object/event model with player, weapon pickup, bullets, zombies, UI, walls, effects, and reusable scripts.
- **Verified features:** player movement; gravity/jumping and coyote/buffer logic; weapon combinations; projectiles; pickups; effects; UI/play flow; multiple character objects.
- **Likely contribution:** The inspected branch has a single import/merge-style commit attributed to Hamood. This does not establish which code/art assets Hamood created. Team, jam, and role are **TODOs**.
- **Completeness/docs/install:** Substantial project assets/code, but no README or build instructions. Merge artifact files and a task spreadsheet are tracked.
- **Tests/deployment/media:** No automated tests, releases, gameplay video, or curated screenshots.
- **Security/licensing:** Confirm ownership/licenses for all sprite art and spreadsheet content before reuse.
- **Suitability:** **Secondary game-development project**, subject to role and asset-rights confirmation.

### 16. TheGameEngine — `Kesehet/TheGameEngine`

- **Purpose:** Flask page embedding a basic Three.js rotating-cube playground.
- **Verified stack:** Python/Flask, Three.js, HTML.
- **Architecture/features:** Two Flask routes and a browser-rendered Three.js cube.
- **Likely contribution:** Account commit supports setup work only; no evidence for an actual game engine.
- **Completeness/docs/install:** Minimal demo. More than 9,000 tracked files are a committed Python virtual environment; metadata retains template author text.
- **Tests/deployment/media:** No tests or deployment config.
- **Security:** Flask debug mode is enabled in source. Committed binaries/dependencies create supply-chain and repository-hygiene concerns.
- **Suitability:** **Excluded.** Title overstates the implementation.

### 17. supportpromax — `Kesehet/supportpromax`

- **Purpose:** Experiments around microphone recording, ElevenLabs speech-to-speech, speech-to-text, and text-to-speech.
- **Verified stack:** Python, SoundDevice, NumPy/SciPy, ElevenLabs SDK, dotenv.
- **Architecture/features:** Separate scripts record audio and call ElevenLabs conversion APIs.
- **Likely contribution:** Account commit supports involvement; intended product and status are undocumented.
- **Completeness/docs/install:** Seven-file experiment with no README or dependency manifest. Sample input/output audio is tracked.
- **Tests/deployment/media:** Files named `test.py` are runnable experiments, not automated tests. No deployment.
- **Security/privacy:** API key is environment-loaded in one script; review all history. Tracked voice recordings/outputs require consent and should not be reused.
- **Suitability:** **Excluded for now.** Reconsider after documentation, privacy cleanup, and a coherent application flow.

## Verified portfolio themes

- Python APIs and automation: Flask, FastAPI prototypes, speech pipelines, data tooling.
- AI integration: local Whisper, Ollama, Gemini, task-oriented LLM/Whisper endpoints.
- Full-stack architecture: React/Spring consultation application and PHP/Laravel work.
- Real-time/media exploration: WebRTC audio relay and Socket.IO/HLS synchronization.
- Secondary game work: GameMaker/GML project evidence.

## Claims that remain unverified

- Years of professional experience.
- Exact employer/client relationships and employment dates.
- Sole ownership or precise role on Media Pitch, Fill Masjid, and Zombeez.
- Production deployment, user counts, uptime, latency, cost savings, or performance improvements.
- Live URLs and permission to reuse client/project screenshots.
- Completion status of the MSc at Liverpool John Moores University.

