export type ProjectVisibility = "public" | "withhold-link" | "draft" | "excluded";
export type ProjectCategory =
  | "AI & data"
  | "Automation"
  | "Full-stack"
  | "Real-time systems"
  | "Desktop"
  | "Game development";

export interface ProjectLink {
  label: string;
  href: string;
  public: boolean;
}

export interface ProjectMedia {
  src: string;
  alt: string;
  kind: "concept" | "screenshot" | "diagram";
  caption: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  eyebrow: string;
  valueProposition: string;
  conciseDescription: string;
  detailedCaseStudy: string;
  category: ProjectCategory;
  statusLabel: string;
  technologies: string[];
  businessProblem: string;
  users: string;
  majorFeat: string;
  solution: string;
  role: string;
  majorFeatures: string[];
  technicalChallenges: string[];
  architecture: string[];
  securityConsiderations: string[];
  outcomes: string[];
  evidence: string[];
  lessons: string[];
  nextSteps: string[];
  links: ProjectLink[];
  media: ProjectMedia[];
  featured: boolean;
  secondary: boolean;
  visibility: ProjectVisibility;
  verificationStatus: "Verified in code" | "Partially verified" | "Needs confirmation";
  todoNotes: string[];
}

export const identity = {
  name: "Hamood Siddiqui",
  title: "Python & Full-Stack Developer",
  positioning:
    "Python and Full-Stack Developer building backend systems, AI integrations, automation tools and practical web applications.",
  headline: "Backend, AI and full-stack systems built to solve real operational problems.",
  intro:
    "I build Python APIs, automation workflows, AI-enabled applications and practical web platforms—connecting the backend logic, interfaces and deployment decisions needed to make software useful.",
  github: "https://github.com/Kesehet",
  linkedin: "https://www.linkedin.com/in/hamood-siddiqui/",
  email: "",
  canonicalUrl: "https://kesehet.github.io",
  socialImage: "/images/social-preview.svg"
} as const;

export const capabilities = [
  {
    title: "Backend systems",
    summary:
      "APIs, data models and service boundaries designed around real workflows—not isolated endpoints.",
    evidence: "Flask, FastAPI, Spring Boot, Laravel, SQLite, MySQL"
  },
  {
    title: "AI integrations",
    summary:
      "LLM and speech pipelines that connect models to tools, structured data and delivery channels.",
    evidence: "Ollama, Gemini, faster-whisper, ElevenLabs experiments"
  },
  {
    title: "Automation",
    summary:
      "Local and server-side workflows that remove repetitive steps while keeping failure states visible.",
    evidence: "Python, background workers, webhooks, data processing"
  },
  {
    title: "Full-stack delivery",
    summary:
      "Interfaces and backend services developed as one system, with attention to validation and operations.",
    evidence: "React, Astro, JavaScript, PHP, REST, WebSockets"
  }
] as const;

export const experienceNotes = [
  {
    title: "Backend and AI product work",
    copy:
      "Repository evidence spans schema-aware LLM tooling, local speech transcription, task-oriented model services and practical data workflows.",
    proof: "AiSQL, kesehet-stt, LLM Media Pitch"
  },
  {
    title: "End-to-end application architecture",
    copy:
      "The consultation project demonstrates a layered Spring API paired with a stateful React client across authentication, discovery, booking and ratings.",
    proof: "BookMyConsultation API + UI"
  },
  {
    title: "Real-time media exploration",
    copy:
      "WebRTC and Socket.IO projects tackle one-to-many audio relay and synchronized HLS playback, including connection lifecycle and drift correction.",
    proof: "Fill Masjid server, HNS Movie Party"
  }
] as const;

export const resumeTodos = [
  "Confirm 3+ years versus 5+ years.",
  "Confirm Media Pitch start date: July 2021 versus January 2023.",
  "Confirm whether the Liverpool John Moores University MSc is completed and should appear.",
  "Confirm exact current employment status.",
  "Provide the approved public résumé PDF and contact email."
] as const;

export const projects: PortfolioProject[] = [
  {
    slug: "aisql",
    title: "AiSQL",
    eyebrow: "Schema-aware AI data workflow",
    valueProposition:
      "Turns a plain-language data question into an inspectable SQL and visualization workflow.",
    conciseDescription:
      "A Flask and React prototype that converts uploaded CSV data into SQLite, supplies database context to an LLM and returns executable, chart-ready results.",
    detailedCaseStudy:
      "AiSQL explores the difficult seam between generative output and deterministic data systems. The code does more than place a chat box beside a database: it creates a local dataset, inspects its schema, supplies structured context and tool definitions to a model, executes the resulting query, and carries the response into a visual interface.",
    category: "AI & data",
    statusLabel: "Working prototype",
    technologies: ["Python", "Flask", "SQLite", "pandas", "React", "Ollama", "Gemini"],
    businessProblem:
      "People with operational data often know the question they need answered but not the schema or SQL required to answer it.",
    users: "Analysts, operators and small teams working with CSV datasets.",
    majorFeat:
      "Connected schema inspection, model tool-calling, SQL execution and chart-ready results into one end-to-end loop.",
    solution:
      "CSV files are normalized into a named SQLite database. Python inspects tables and columns, builds model context and exposes constrained query tools. The React interface manages database setup, questions, generated queries and results.",
    role:
      "Repository ownership and commits support direct implementation work; exact collaborators and project context still need confirmation.",
    majorFeatures: [
      "Multi-file CSV ingestion into SQLite",
      "Database schema inspection and context generation",
      "Natural-language question flow with model tool calls",
      "SQL execution and tabular responses",
      "Question suggestions and chart-oriented frontend utilities"
    ],
    technicalChallenges: [
      "Giving the model enough schema context without losing the user’s intent",
      "Moving between probabilistic model output and deterministic database execution",
      "Keeping uploaded dataset setup and query interactions in one understandable UI"
    ],
    architecture: [
      "React interface handles CSV setup and question/result state.",
      "Flask exposes database creation, question generation and query endpoints.",
      "Python modules inspect SQLite and provide callable tools to Ollama or Gemini.",
      "Results return to the client for table and chart presentation."
    ],
    securityConsiderations: [
      "A public deployment needs authentication, request and file-size limits, restricted CORS and isolated storage.",
      "Database names must be normalized to prevent filesystem traversal.",
      "SQL execution should be parsed and enforced as read-only before any shared deployment."
    ],
    outcomes: [
      "A repository-verified working path from CSV ingestion to query results",
      "A concrete demonstration of connecting LLM tools to a relational data layer"
    ],
    evidence: [
      "Flask endpoints for database creation, questions and SQL execution",
      "SQLite schema-inspection and CSV-ingestion modules",
      "React database setup, query cards and result/chart components"
    ],
    lessons: [
      "Model integration quality depends heavily on the tools and boundaries around the model.",
      "An inspectable SQL step makes an AI data workflow easier to reason about."
    ],
    nextSteps: [
      "Enforce a read-only SQL parser and per-session storage isolation",
      "Add integration tests around schema ingestion and unsafe queries",
      "Replace generic setup documentation with a reproducible deployment guide"
    ],
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/Kesehet/aisql",
        public: false
      }
    ],
    media: [
      {
        src: "/images/projects/concepts/aisql-interface-concept.png",
        alt:
          "Conceptual AiSQL interface showing CSV import, generated SQL, a result table and a bar chart",
        kind: "concept",
        caption:
          "Interface concept generated from repository-verified features; not an original product screenshot."
      },
      {
        src: "/images/projects/screenshots/aisql-repository-ui.png",
        alt:
          "Actual AiSQL repository build showing database naming and CSV file selection",
        kind: "screenshot",
        caption:
          "Actual capture from the repository’s committed frontend build. No data was uploaded and no interface details were altered."
      }
    ],
    featured: true,
    secondary: false,
    visibility: "withhold-link",
    verificationStatus: "Verified in code",
    todoNotes: [
      "Confirm exact role and intended users.",
      "Publish repository link only after security hardening."
    ]
  },
  {
    slug: "local-speech-to-text",
    title: "Local Speech-to-Text Workflow",
    eyebrow: "Background transcription automation",
    valueProposition:
      "Captures speech on demand, transcribes locally and delivers the result without blocking the next recording.",
    conciseDescription:
      "A hotkey-driven Python utility combining audio capture, a background work queue, faster-whisper inference and Discord webhook delivery.",
    detailedCaseStudy:
      "The interesting engineering work is not simply calling a transcription library. Recording, model inference and network delivery operate at very different speeds. The utility separates those responsibilities so the hotkey interaction stays responsive while completed recordings move through transcription and delivery in the background.",
    category: "Automation",
    statusLabel: "Working local utility",
    technologies: ["Python", "faster-whisper", "CTranslate2", "SoundDevice", "pynput", "Requests"],
    businessProblem:
      "Capturing spoken notes is fast, but manually transcribing and moving them into a shared channel interrupts the work.",
    users: "Individuals and small teams using voice capture as an input workflow.",
    majorFeat:
      "Separated real-time audio capture from slower transcription and webhook delivery with a thread-safe background queue.",
    solution:
      "A global hotkey starts and stops microphone capture. Audio chunks are collected safely, written to WAV and queued. A worker applies Whisper with voice-activity detection, then sends non-empty text to a configured Discord webhook.",
    role:
      "The repository and commits directly evidence implementation under Hamood’s GitHub account.",
    majorFeatures: [
      "Toggle recording with a keyboard shortcut",
      "Configurable model, language, audio device and beam size",
      "Background transcription queue",
      "Voice-activity filtering",
      "Webhook delivery with useful failure output"
    ],
    technicalChallenges: [
      "Managing audio callbacks without blocking input capture",
      "Flushing and concatenating audio chunks safely",
      "Keeping slow inference and network requests away from the interaction loop"
    ],
    architecture: [
      "Keyboard listener controls a recorder backed by an audio queue.",
      "Completed WAV files enter a separate processing queue.",
      "A background worker runs faster-whisper locally.",
      "Approved transcript text is posted to a webhook configured through the environment."
    ],
    securityConsiderations: [
      "Webhook URLs belong in ignored environment files.",
      "Users need clear notice that transcript text leaves the machine when delivery is enabled.",
      "Temporary recordings should be deleted or retained through an explicit policy."
    ],
    outcomes: [
      "A compact end-to-end voice capture and delivery workflow",
      "Local transcription keeps model processing on the user’s machine"
    ],
    evidence: [
      "Recorder class with callback, queue and collector thread",
      "Background worker for transcription and Discord delivery",
      "Pinned dependencies and environment example"
    ],
    lessons: [
      "Responsive automation often depends more on work separation than UI complexity.",
      "Privacy boundaries should be explicit when a local pipeline includes a remote delivery step."
    ],
    nextSteps: [
      "Add platform-specific installation documentation",
      "Add unit tests for queue state and mocked webhook failures",
      "Remove the tracked sample recording and package the utility"
    ],
    links: [
      {
        label: "View source on GitHub",
        href: "https://github.com/Kesehet/kesehet-stt",
        public: true
      }
    ],
    media: [],
    featured: true,
    secondary: false,
    visibility: "public",
    verificationStatus: "Verified in code",
    todoNotes: ["Confirm the intended public use case and permission for any audio demo."]
  },
  {
    slug: "media-pitch-platform",
    title: "Media Pitch Platform Work",
    eyebrow: "Marketing, operations and AI service layers",
    valueProposition:
      "Explores how a service business can connect its public website, internal operational data and model-backed workflows.",
    conciseDescription:
      "Repository evidence spans a PHP service website, a private book-profit tracker, Laravel task APIs for LLM/Whisper work and a later Next.js redesign.",
    detailedCaseStudy:
      "The major technical theme is evolution across layers rather than a single framework showcase. Public content, internal operational tracking and asynchronous model work require different boundaries. The repositories show those concerns being separated into a PHP website, a guarded local analytics tool and a Laravel task/machine service.",
    category: "Full-stack",
    statusLabel: "Platform work · scope confirmation pending",
    technologies: ["PHP", "Laravel", "SQLite", "JavaScript", "Next.js", "React"],
    businessProblem:
      "A service business needs a clear public presence while operational tools and long-running AI tasks require controlled, separate application layers.",
    users: "Service customers and internal operators; exact audience and production status need confirmation.",
    majorFeat:
      "Tackled the separation between a public marketing surface, private operational tracking and API-driven LLM/Whisper task processing.",
    solution:
      "The public site uses shared PHP content and includes. A separate SQLite tracker models print batches, orders, returns, expenses and stock. A Laravel service exposes task and model-processing routes with machine/service abstractions.",
    role:
      "The account contains implementation commits, but precise responsibility, employment context and contribution to the redesign require confirmation before stronger first-person claims.",
    majorFeatures: [
      "Multi-page service website",
      "Book batch, order, return, expense and stock tracking",
      "CSV export and local SQLite backup flow",
      "LLM and Whisper task endpoints",
      "Task polling/update lifecycle and machine records"
    ],
    technicalChallenges: [
      "Keeping private operational data away from the public website",
      "Representing long-running model work as tasks that can be polled and updated",
      "Evolving a product surface across PHP, Laravel and Next.js codebases"
    ],
    architecture: [
      "PHP pages provide the public marketing layer.",
      "A local/private PHP and SQLite application holds book-operation records.",
      "Laravel models, services and API routes coordinate LLM/Whisper tasks and machines.",
      "A separate Next.js repository explores a modernized presentation layer."
    ],
    securityConsiderations: [
      "Tracked third-party credentials must be rotated and removed from Git history.",
      "The analytics application explicitly requires authentication and database relocation before public hosting.",
      "Operational task routes need an authentication and authorization review."
    ],
    outcomes: [
      "Substantial code evidence across public, operational and AI-service concerns",
      "No production metrics or business outcomes are claimed without confirmation"
    ],
    evidence: [
      "PHP site pages and shared content",
      "Documented local SQLite book-profit tracker",
      "Laravel task/machine models, services, migrations and API routes"
    ],
    lessons: [
      "Different business surfaces need different access boundaries.",
      "Long-running model work benefits from explicit task state rather than a single blocking request."
    ],
    nextSteps: [
      "Complete credential rotation and history cleanup before publishing links",
      "Confirm Hamood’s exact role, dates and asset permissions",
      "Add authentication and feature-specific automated tests"
    ],
    links: [],
    media: [],
    featured: true,
    secondary: false,
    visibility: "withhold-link",
    verificationStatus: "Needs confirmation",
    todoNotes: [
      "Confirm July 2021 versus January 2023 start date.",
      "Confirm exact contribution to each repository.",
      "Obtain permission for all client media."
    ]
  },
  {
    slug: "book-my-consultation",
    title: "BookMyConsultation",
    eyebrow: "Layered appointment platform",
    valueProposition:
      "Connects doctor discovery, authentication, scheduling and ratings across a REST API and stateful client.",
    conciseDescription:
      "An educational full-stack application with a layered Spring Boot/MySQL backend and a React/Redux booking interface.",
    detailedCaseStudy:
      "Appointment booking crosses more boundaries than the final button suggests: user identity, doctor availability, time slots, appointment state and post-appointment ratings all need consistent models. This project tackles the flow as one full-stack system, with controllers, services, repositories and entities mirrored by focused client screens.",
    category: "Full-stack",
    statusLabel: "Completed educational build",
    technologies: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "JWT", "React", "Redux"],
    businessProblem:
      "Patients need a coherent way to find a doctor, authenticate, select availability, manage appointments and provide a rating.",
    users: "Patients, doctors and application administrators in an educational project scenario.",
    majorFeat:
      "Modelled a multi-step booking domain across layered backend services and a coordinated React client instead of treating it as isolated CRUD screens.",
    solution:
      "The Java API separates HTTP controllers, business services, repositories and JPA entities. JWT-related providers support authenticated flows. The React client organizes login, registration, doctor discovery, booking, appointments and ratings into screen-level workflows with Redux state.",
    role:
      "Repository ownership supports implementation work. Project structure suggests coursework/capstone context, which should be confirmed.",
    majorFeatures: [
      "Registration and login",
      "Doctor search, details and availability",
      "Appointment booking and viewing",
      "Appointment ratings",
      "JWT token persistence and verification",
      "Swagger and Postman API support"
    ],
    technicalChallenges: [
      "Keeping availability and booking state consistent across API and client",
      "Separating domain logic from HTTP and persistence concerns",
      "Coordinating authenticated state across multiple React workflows"
    ],
    architecture: [
      "React screens and Redux state call a shared HTTP service.",
      "Spring controllers validate and translate requests.",
      "Services implement appointment, doctor, user and rating workflows.",
      "JPA repositories persist entities in MySQL."
    ],
    securityConsiderations: [
      "Move database configuration fully to environment/secrets.",
      "Review the custom JWT implementation and upgrade dated dependencies.",
      "Expand tests around authorization boundaries and appointment ownership."
    ],
    outcomes: [
      "A repository-verified end-to-end application structure",
      "Working code paths for the core discovery-to-rating lifecycle"
    ],
    evidence: [
      "67 Java source files across controllers, services, repositories and entities",
      "React screens for authentication, doctor discovery, booking and ratings",
      "SQL load script, Postman collection and setup documentation"
    ],
    lessons: [
      "A layered backend makes domain responsibilities visible and testable.",
      "Client state should follow the user journey, not merely mirror database tables."
    ],
    nextSteps: [
      "Add service/controller integration tests",
      "Update the dependency baseline and configuration practices",
      "Capture actual screens from a synthetic local dataset"
    ],
    links: [
      {
        label: "Backend repository",
        href: "https://github.com/Kesehet/BookMyConsultation",
        public: true
      },
      {
        label: "Frontend repository",
        href: "https://github.com/Kesehet/BookMyConsultationUI",
        public: true
      }
    ],
    media: [
      {
        src: "/images/projects/concepts/bookmyconsultation-interface-concept.png",
        alt:
          "Conceptual appointment interface showing doctor discovery, available slots and appointment booking",
        kind: "concept",
        caption:
          "Interface concept generated from repository-verified workflows; not an original application screenshot."
      }
    ],
    featured: true,
    secondary: false,
    visibility: "public",
    verificationStatus: "Verified in code",
    todoNotes: ["Confirm the educational/capstone description."]
  },
  {
    slug: "fill-masjid",
    title: "Fill Masjid Ecosystem",
    eyebrow: "Location and one-to-many real-time audio",
    valueProposition:
      "Explores how a local broadcaster can reach many listeners through location-aware clients and a WebRTC audio relay.",
    conciseDescription:
      "A set of experiments covering nearest-masjid discovery and a Node/WebRTC server that relays a broadcaster’s audio track to connected listeners.",
    detailedCaseStudy:
      "The hard problem is one-to-many real-time media, not simply playing an audio file. The current server maintains broadcast state and creates peer connections for listeners, while planning documents identify the single-process fault domain and map an incremental path toward shared state and a purpose-built SFU. The portfolio clearly separates that implemented relay from the proposed scale architecture.",
    category: "Real-time systems",
    statusLabel: "Implemented relay + proposed scale architecture",
    technologies: ["Node.js", "Express", "WebRTC", "coturn", "React Native", "Expo"],
    businessProblem:
      "A community broadcast needs low-friction, near-real-time audio delivery from one source to many listeners, alongside location-aware discovery.",
    users: "Broadcasters and listeners in a masjid/community context; exact deployment status needs confirmation.",
    majorFeat:
      "Built the core one-to-many WebRTC relay lifecycle and reasoned explicitly about the architectural breakpoints between a single process and an SFU-backed system.",
    solution:
      "The Node server accepts broadcaster and consumer session descriptions, attaches listener peer connections to the active audio stream and cleans up failed peers. A React Native prototype requests location and sorts candidate masjids by distance.",
    role:
      "Recent account-authored commits support server/deployment involvement. Product role, collaborators and current operational status need confirmation.",
    majorFeatures: [
      "Broadcaster and consumer signaling endpoints",
      "Server-side WebRTC peer lifecycle",
      "In-memory broadcast and listener state",
      "Constrained production-origin CORS",
      "Linux bootstrap, firewall and service setup",
      "Mobile location permission and nearest-first sorting prototype"
    ],
    technicalChallenges: [
      "Forwarding a live audio track to multiple peer connections",
      "Cleaning up disconnected or failed media sessions",
      "Recognizing when in-memory state and per-listener relay stop scaling safely"
    ],
    architecture: [
      "Current: broadcaster → Node/wrtc relay → one peer connection per listener.",
      "Current: in-memory broadcast registry holds active streams and consumers.",
      "Proposed, not delivered: stateless signaling + shared state + purpose-built SFU + regional TURN."
    ],
    securityConsiderations: [
      "Tracked key/certificate and TURN credential material must be rotated and removed from history.",
      "Broadcast and listener signaling needs authentication, authorization, schema validation and rate limits.",
      "Operational addresses and secrets belong in protected configuration."
    ],
    outcomes: [
      "A concrete WebRTC relay implementation and connection lifecycle",
      "A documented migration path that identifies current bottlenecks without claiming unmeasured capacity"
    ],
    evidence: [
      "Express broadcaster/consumer endpoints",
      "wrtc peer creation, track attachment and cleanup",
      "Deployment bootstrap and scale-planning documents",
      "React Native geolocation/distance prototype"
    ],
    lessons: [
      "A functional real-time prototype and a scalable media architecture are different milestones.",
      "Scale planning is strongest when current constraints are named before technologies are proposed."
    ],
    nextSteps: [
      "Rotate and remove all tracked key/credential material",
      "Add authenticated room ownership and listener tokens",
      "Instrument the existing relay before evaluating an SFU migration"
    ],
    links: [],
    media: [],
    featured: true,
    secondary: false,
    visibility: "withhold-link",
    verificationStatus: "Partially verified",
    todoNotes: [
      "Confirm product naming permission and current status.",
      "Do not publish repository links until security remediation is complete."
    ]
  },
  {
    slug: "cafe-clock",
    title: "CafeClock",
    eyebrow: "Desktop kiosk constraints",
    valueProposition:
      "Investigates how an Electron shell can hold a focused, full-screen station experience.",
    conciseDescription:
      "A small Electron prototype that opens a gaming-café login surface in kiosk mode and controls common window and shortcut escape paths.",
    detailedCaseStudy:
      "The repository is intentionally small, but it tackles a concrete desktop concern: a kiosk interface behaves differently from an ordinary web page. The Electron main process creates an always-on-top, menu-free full-screen window and registers global shortcuts to control how a station can leave or reload the experience.",
    category: "Desktop",
    statusLabel: "Kiosk-shell prototype",
    technologies: ["Electron", "JavaScript", "HTML", "CSS"],
    businessProblem:
      "A shared gaming station needs a focused launch surface that does not behave like a normal, freely navigable browser window.",
    users: "Gaming-café operators and customers; the intended operational workflow needs confirmation.",
    majorFeat:
      "Moved beyond a browser mockup to explore operating-system-level kiosk window behavior and global shortcut control.",
    solution:
      "Electron opens a local login interface in kiosk and always-on-top mode, hides the application menu and registers shortcuts for reload, close and window-switch combinations.",
    role:
      "The repository contains an account-authored prototype; broader business requirements and any off-repository continuation need confirmation.",
    majorFeatures: [
      "Kiosk and always-on-top BrowserWindow",
      "Hidden application menu",
      "Global shortcut registration",
      "Local login interface shell"
    ],
    technicalChallenges: [
      "Controlling window behavior outside normal browser constraints",
      "Handling escape/reload/close paths consistently across operating systems"
    ],
    architecture: [
      "Electron main process owns the kiosk BrowserWindow.",
      "A local HTML/CSS surface provides the initial station interface.",
      "GlobalShortcut handlers constrain selected desktop actions."
    ],
    securityConsiderations: [
      "Disable Node integration in the renderer and use a narrow preload bridge.",
      "Remove developer tools and define an authenticated operator escape path.",
      "A real login requires a backend, secure sessions and device policy."
    ],
    outcomes: [
      "A working desktop shell demonstrating kiosk-specific controls",
      "No claim is made for authentication, billing or time tracking not present in code"
    ],
    evidence: [
      "Electron BrowserWindow kiosk configuration",
      "Global shortcut registration and cleanup",
      "Local login interface"
    ],
    lessons: [
      "Desktop kiosk software needs OS-aware controls in addition to interface design.",
      "A secure operator escape path is as important as blocking ordinary exit paths."
    ],
    nextSteps: [
      "Move renderer access behind context isolation and a preload API",
      "Add a secure operator unlock flow",
      "Confirm whether session timing or billing exists outside this repository"
    ],
    links: [
      {
        label: "View source on GitHub",
        href: "https://github.com/Kesehet/CafeClock",
        public: true
      }
    ],
    media: [],
    featured: true,
    secondary: false,
    visibility: "public",
    verificationStatus: "Verified in code",
    todoNotes: ["Replace or license the tracked background before capturing the real UI."]
  },
  {
    slug: "hns-movie-party",
    title: "HNS Movie Party",
    eyebrow: "Synchronized media playback",
    valueProposition:
      "Keeps distributed HLS viewers close to a host’s playback position without hard-seeking every small difference.",
    conciseDescription:
      "A Flask-SocketIO prototype with host state broadcasts, HLS playback and client-side drift correction.",
    detailedCaseStudy:
      "Synchronized playback is a state and timing problem. The host periodically publishes video, time and play state. Listener clients compare local time with the host, hard-seek only when drift is large and make small playback-rate corrections when the difference is recoverable.",
    category: "Real-time systems",
    statusLabel: "Experimental prototype",
    technologies: ["Python", "Flask", "Socket.IO", "HLS.js", "Video.js"],
    businessProblem:
      "Remote viewers need to watch the same hosted media at approximately the same moment.",
    users: "Small private watch groups.",
    majorFeat:
      "Implemented two-tier synchronization: hard correction for large drift and subtle playback-rate adjustment for small drift.",
    solution:
      "Flask serves HLS assets and Socket.IO state. A browser can become the host and emit playback updates. Other clients load the selected stream and correct their local state.",
    role:
      "Repository ownership supports implementation work; collaborators and intended deployment need confirmation.",
    majorFeatures: [
      "HLS playlist discovery and playback",
      "Host selection and state broadcasting",
      "Play/pause synchronization",
      "Threshold-based drift correction",
      "Restricted media-extension upload"
    ],
    technicalChallenges: [
      "Balancing disruptive seeks against gradual time correction",
      "Coordinating player state across asynchronous clients",
      "Serving segmented video with appropriate content types"
    ],
    architecture: [
      "Flask serves views and local HLS files.",
      "Socket.IO broadcasts host video, timestamp and playback state.",
      "Listener clients use HLS.js/Video.js and local drift correction."
    ],
    securityConsiderations: [
      "Host control and upload need authentication and authorization.",
      "Wildcard origins, hard-coded application secrets and unsafe development serving must be removed.",
      "Uploads need aggregate size limits, quotas and isolated storage."
    ],
    outcomes: [
      "A working synchronization algorithm visible in client code",
      "An end-to-end prototype across server events and browser media playback"
    ],
    evidence: [
      "Socket.IO host and sync event handlers",
      "HLS serving and media-type handling",
      "Client hard-seek and playback-rate correction logic"
    ],
    lessons: [
      "Not every timing difference requires a disruptive seek.",
      "Real-time control channels need explicit ownership rules before public deployment."
    ],
    nextSteps: [
      "Add authenticated rooms and host transfer",
      "Remove unsafe upload/development defaults",
      "Add multi-client browser tests around drift thresholds"
    ],
    links: [],
    media: [],
    featured: false,
    secondary: true,
    visibility: "withhold-link",
    verificationStatus: "Verified in code",
    todoNotes: ["Confirm intended audience and screenshot media."]
  },
  {
    slug: "zombeez-game-jam",
    title: "Zombeez Game Jam",
    eyebrow: "Secondary specialty · game systems",
    valueProposition:
      "Combines responsive platform movement, weapon systems and object-driven gameplay in GameMaker.",
    conciseDescription:
      "A substantial GameMaker/GML project containing player movement, jump buffering, weapon combinations, projectiles, enemies, effects and UI.",
    detailedCaseStudy:
      "The code shows attention to game feel as well as feature breadth. Movement includes collision stepping, gravity, double-jump state, jump buffering and coyote-time variables. Weapon state combines slots into multiple named configurations, while projectiles, pickups, enemies and visual effects use GameMaker’s object/event model.",
    category: "Game development",
    statusLabel: "Game-jam build · role confirmation pending",
    technologies: ["GameMaker", "GML"],
    businessProblem:
      "A game-jam action project needs responsive controls and enough interacting systems to create a playable loop under time pressure.",
    users: "Game-jam players; event and team details need confirmation.",
    majorFeat:
      "Tackled responsive movement and a combinatorial weapon system within GameMaker’s event-driven object model.",
    solution:
      "Player event code handles input, collision, jump timing and animation. Pickup and weapon arrays select combinations, while bullet, zombie, wall, UI and effect objects form the wider loop.",
    role:
      "The branch is attributed to Hamood but imported in a single merge-style commit, so personal code/art responsibilities require confirmation.",
    majorFeatures: [
      "Collision-aware platform movement",
      "Jump buffering, double jump and coyote-time state",
      "Weapon slots and combinations",
      "Projectiles and pickups",
      "Multiple player objects, zombies, UI and effects"
    ],
    technicalChallenges: [
      "Making platform movement feel responsive around frame-level input timing",
      "Representing multiple weapon combinations without duplicating every path",
      "Coordinating GameMaker objects and events under game-jam constraints"
    ],
    architecture: [
      "GameMaker objects contain create, step, collision, alarm and draw events.",
      "Reusable GML scripts initialize controls, projectiles and animation choices.",
      "Rooms and sprites compose the playable scenes."
    ],
    securityConsiderations: [
      "Confirm licenses and team permission for all art, fonts, audio and spreadsheet content before reuse."
    ],
    outcomes: [
      "Substantial repository evidence for gameplay systems",
      "No award, event result or sole-authorship claim is made"
    ],
    evidence: [
      "29 GML event/script files",
      "Player movement and weapon initialization code",
      "GameMaker rooms, objects and sprite assets"
    ],
    lessons: [
      "Small timing allowances can materially improve perceived control responsiveness.",
      "Data-driven combinations reduce repeated weapon logic."
    ],
    nextSteps: [
      "Confirm team roles and asset ownership",
      "Capture approved gameplay footage",
      "Document controls and a reproducible build"
    ],
    links: [
      {
        label: "View source on GitHub",
        href: "https://github.com/Kesehet/Zombeez-Game-Jam",
        public: true
      }
    ],
    media: [],
    featured: false,
    secondary: true,
    visibility: "public",
    verificationStatus: "Needs confirmation",
    todoNotes: ["Confirm event, team, role and asset licenses."]
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
export const secondaryProjects = projects.filter((project) => project.secondary);
export const visibleProjects = projects.filter(
  (project) => project.visibility !== "draft" && project.visibility !== "excluded"
);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
