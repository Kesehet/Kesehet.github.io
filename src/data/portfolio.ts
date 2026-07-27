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
  verificationStatus: "Implementation verified" | "Implementation reviewed" | "Prototype reviewed";
  todoNotes: string[];
}

export const identity = {
  name: "Hamood Siddiqui",
  title: "Python & Full-Stack Developer",
  positioning:
    "Python and Full-Stack Developer with nearly eight years of hands-on experience building backend systems, AI integrations, automation tools and practical web applications.",
  headline: "Backend, AI and full-stack systems built to solve real operational problems.",
  intro:
    "Across nearly eight years of delivery, I have built Python APIs, automation workflows, AI-enabled applications and practical web platforms - connecting backend logic, interfaces and deployment decisions to real service needs.",
  github: "https://github.com/Kesehet",
  linkedin: "https://www.linkedin.com/in/hamood-siddiqui/",
  email: "hamood.siddiqui@gmail.com",
  phone: "+91 9540867732",
  phoneHref: "tel:+919540867732",
  canonicalUrl: "https://kesehet.github.io",
  socialImage: "/images/social-preview.svg"
} as const;

export const capabilities = [
  {
    title: "Backend systems",
    summary:
      "APIs, data models and service boundaries designed around real workflows - not isolated endpoints.",
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
    title: "Backend and AI service work",
    copy:
      "Work spans schema-aware LLM tooling, local speech transcription, task-oriented model services and practical operational data workflows.",
    proof: "AiSQL, local speech workflow, Media Pitch services"
  },
  {
    title: "End-to-end application architecture",
    copy:
      "The consultation project demonstrates a layered Spring API paired with a stateful React client across authentication, discovery, booking and ratings.",
    proof: "BookMyConsultation API + UI"
  },
  {
    title: "Real-time and location-aware services",
    copy:
      "WebRTC, Socket.IO and location-aware projects tackle one-to-many audio relay, synchronized playback, connection lifecycle and service discovery.",
    proof: "Fill Masjid, HNS Movie Party"
  }
] as const;

export const experienceContexts = [
  {
    title: "Media Pitch",
    copy:
      "Worked across public-facing web experiences, operational tooling and AI-assisted service workflows.",
    href: "https://mediapitch.in"
  },
  {
    title: "MarketGenics",
    copy:
      "Contributed to web and service-platform delivery for MarketGenics as part of a broader client and product portfolio.",
    href: "https://marketgenics.co"
  },
  {
    title: "Fill Masjid",
    copy:
      "Worked on location-aware service concepts and real-time audio systems connected to the Fill Masjid ecosystem.",
    href: "https://fillmasjid.in"
  }
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
      "Designed and implemented the schema-aware workflow across CSV ingestion, SQLite inspection, model tool-calling, query execution and React result presentation.",
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
      "An implemented working path from CSV ingestion to query results",
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
      "Publish a reproducible deployment and operations guide"
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
          "Product-interface concept illustrating the implemented CSV-to-SQL workflow."
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
    verificationStatus: "Implementation verified",
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
      "Developed the hotkey-driven capture flow, background processing queue, local transcription pipeline and webhook delivery integration.",
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
    verificationStatus: "Implementation verified",
    todoNotes: ["Confirm the intended public use case and permission for any audio demo."]
  },
  {
    slug: "media-pitch-platform",
    title: "Media Pitch Platform Work",
    eyebrow: "Marketing, operations and AI service layers",
    valueProposition:
      "Explores how a service business can connect its public website, internal operational data and model-backed workflows.",
    conciseDescription:
      "A multi-service workstream spanning a PHP website, private operational tracking, Laravel task APIs for LLM/Whisper processing and a later Next.js redesign.",
    detailedCaseStudy:
      "The major technical theme is evolution across layers rather than a single framework showcase. Public content, internal operational tracking and asynchronous model work require different boundaries. The repositories show those concerns being separated into a PHP website, a guarded local analytics tool and a Laravel task/machine service.",
    category: "Full-stack",
    statusLabel: "Multi-service platform work",
    technologies: ["PHP", "Laravel", "SQLite", "JavaScript", "Next.js", "React"],
    businessProblem:
      "A service business needs a clear public presence while operational tools and long-running AI tasks require controlled, separate application layers.",
    users: "Media Pitch customers, prospects and internal service operators.",
    majorFeat:
      "Tackled the separation between a public marketing surface, private operational tracking and API-driven LLM/Whisper task processing.",
    solution:
      "The public site uses shared PHP content and includes. A separate SQLite tracker models print batches, orders, returns, expenses and stock. A Laravel service exposes task and model-processing routes with machine/service abstractions.",
    role:
      "Worked across Media Pitch’s public web presence, operational tracking tools and Laravel-based AI service workflows.",
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
      "A service platform spanning public, operational and AI-assisted workflows",
      "Clear separation between customer-facing experiences and protected internal operations"
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
      "Consolidate deployment practices and approved brand assets",
      "Add authentication and feature-specific automated tests"
    ],
    links: [
      {
        label: "Visit Media Pitch",
        href: "https://mediapitch.in",
        public: true
      }
    ],
    media: [],
    featured: true,
    secondary: false,
    visibility: "withhold-link",
    verificationStatus: "Implementation reviewed",
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
      "A full-stack application with a layered Spring Boot/MySQL backend and a React/Redux booking interface.",
    detailedCaseStudy:
      "Appointment booking crosses more boundaries than the final button suggests: user identity, doctor availability, time slots, appointment state and post-appointment ratings all need consistent models. This project tackles the flow as one full-stack system, with controllers, services, repositories and entities mirrored by focused client screens.",
    category: "Full-stack",
    statusLabel: "Completed full-stack build",
    technologies: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "JWT", "React", "Redux"],
    businessProblem:
      "Patients need a coherent way to find a doctor, authenticate, select availability, manage appointments and provide a rating.",
    users: "Patients, doctors and application administrators using a structured appointment workflow.",
    majorFeat:
      "Modelled a multi-step booking domain across layered backend services and a coordinated React client instead of treating it as isolated CRUD screens.",
    solution:
      "The Java API separates HTTP controllers, business services, repositories and JPA entities. JWT-related providers support authenticated flows. The React client organizes login, registration, doctor discovery, booking, appointments and ratings into screen-level workflows with Redux state.",
    role:
      "Repository ownership and the connected backend/frontend implementation support direct full-stack development work.",
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
      "A complete end-to-end application structure",
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
          "Product-interface concept illustrating doctor discovery, availability and appointment booking."
      }
    ],
    featured: true,
    secondary: false,
    visibility: "public",
    verificationStatus: "Implementation verified",
    todoNotes: []
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
      "The hard problem is one-to-many real-time media, not simply playing an audio file. The current server maintains broadcast state and creates peer connections for listeners, while the scale plan identifies the single-process fault domain and maps an incremental path toward shared state and a purpose-built SFU.",
    category: "Real-time systems",
    statusLabel: "Implemented relay + proposed scale architecture",
    technologies: ["Node.js", "Express", "WebRTC", "coturn", "React Native", "Expo"],
    businessProblem:
      "A community broadcast needs low-friction, near-real-time audio delivery from one source to many listeners, alongside location-aware discovery.",
    users: "Masjid teams, local broadcasters and community listeners.",
    majorFeat:
      "Built the core one-to-many WebRTC relay lifecycle and reasoned explicitly about the architectural breakpoints between a single process and an SFU-backed system.",
    solution:
      "The Node server accepts broadcaster and consumer session descriptions, attaches listener peer connections to the active audio stream and cleans up failed peers. A React Native prototype requests location and sorts candidate masjids by distance.",
    role:
      "Developed location-aware service concepts, the Node/WebRTC relay lifecycle and the deployment and scaling approach for the Fill Masjid ecosystem.",
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
      "Scale target: stateless signaling + shared state + purpose-built SFU + regional TURN."
    ],
    securityConsiderations: [
      "Tracked key/certificate and TURN credential material must be rotated and removed from history.",
      "Broadcast and listener signaling needs authentication, authorization, schema validation and rate limits.",
      "Operational addresses and secrets belong in protected configuration."
    ],
    outcomes: [
      "A concrete WebRTC relay implementation and connection lifecycle",
      "A documented migration path based on the current relay’s architectural bottlenecks"
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
    verificationStatus: "Implementation reviewed",
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
    users: "Gaming-café operators and customers using shared desktop stations.",
    majorFeat:
      "Moved beyond a browser mockup to explore operating-system-level kiosk window behavior and global shortcut control.",
    solution:
      "Electron opens a local login interface in kiosk and always-on-top mode, hides the application menu and registers shortcuts for reload, close and window-switch combinations.",
    role:
      "Built the Electron kiosk-shell prototype and explored the operating-system controls required for a focused station experience.",
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
      "A clear foundation for adding authenticated sessions, billing and station management"
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
      "Add session timing, billing and station-management workflows"
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
    verificationStatus: "Implementation verified",
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
      "Built the Flask-SocketIO synchronization flow, host-state broadcasts and two-tier client drift-correction strategy.",
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
    verificationStatus: "Implementation verified",
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
    statusLabel: "Game-jam systems build",
    technologies: ["GameMaker", "GML"],
    businessProblem:
      "A game-jam action project needs responsive controls and enough interacting systems to create a playable loop under time pressure.",
    users: "Players of a fast-paced game-jam action experience.",
    majorFeat:
      "Tackled responsive movement and a combinatorial weapon system within GameMaker’s event-driven object model.",
    solution:
      "Player event code handles input, collision, jump timing and animation. Pickup and weapon arrays select combinations, while bullet, zombie, wall, UI and effect objects form the wider loop.",
    role:
      "Contributed to gameplay engineering, including responsive movement, weapon combinations and event-driven object behavior.",
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
      "A playable collection of interconnected movement, combat and feedback systems",
      "Reusable gameplay logic for input timing, weapons, projectiles and enemies"
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
      "Document team contributions and approved asset sources",
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
    verificationStatus: "Implementation reviewed",
    todoNotes: ["Confirm event, team, role and asset licenses."]
  },
  {
    slug: "storeai",
    title: "StoreAI",
    eyebrow: "Tool-calling product data assistant",
    valueProposition:
      "Connects natural-language requests to inspectable product-catalog operations through a focused AI interface.",
    conciseDescription:
      "A Flask and Ollama prototype that exposes product search and management functions as model-callable tools and returns the executed operations to a browser interface.",
    detailedCaseStudy:
      "StoreAI explores how a model can operate on business data without hiding the underlying action. The application defines explicit tools for listing, searching, reading, adding, updating and deleting products. Ollama selects a tool, Python executes the corresponding catalog request, and the interface displays the function name, arguments and output rather than presenting an unsupported answer as fact.",
    category: "AI & data",
    statusLabel: "Working tool-calling prototype",
    technologies: ["Python", "Flask", "Ollama", "JavaScript", "REST APIs"],
    businessProblem:
      "Product and operational data is useful to small teams, but finding or changing a record often requires knowing the underlying system and its query conventions.",
    users: "Small-business operators and teams working with product-catalog data.",
    majorFeat:
      "Connected model-selected tool calls to explicit product operations while keeping the invoked function, arguments and returned records inspectable.",
    solution:
      "A Flask endpoint accepts a natural-language request and passes it to Ollama with typed product tools. The selected Python function calls the catalog API, appends the result to conversation context and returns the operation details to a lightweight chat interface.",
    role:
      "Built the Flask service, Ollama tool-calling loop, product-operation adapters, context handling and browser interface.",
    majorFeatures: [
      "Natural-language product requests",
      "Typed tools for search, listing and record operations",
      "Pagination and field selection for catalog search",
      "Conversation context controls",
      "Browser display of executed tool outputs"
    ],
    technicalChallenges: [
      "Mapping probabilistic model decisions onto explicit callable operations",
      "Preserving enough context for follow-up questions without hiding the data source",
      "Handling read and write tools through one consistent schema"
    ],
    architecture: [
      "The browser sends a request to a Flask endpoint.",
      "Ollama receives conversation context and product tool definitions.",
      "Python dispatches approved tool names to REST-backed catalog functions.",
      "Function arguments and outputs return to the interface for inspection."
    ],
    securityConsiderations: [
      "Write and delete operations need authentication, authorization and an explicit confirmation boundary.",
      "CORS should be restricted before deployment.",
      "Persisted conversation context must exclude secrets and follow a retention policy."
    ],
    outcomes: [
      "A working natural-language-to-tool execution path",
      "Inspectable product search and management responses rather than opaque generated claims"
    ],
    evidence: [
      "Flask request and context endpoints",
      "Ollama tool definitions and dispatch logic",
      "Product search, pagination, selection and mutation adapters",
      "Repository browser interface for submitting and displaying operations"
    ],
    lessons: [
      "AI-assisted business tools are more trustworthy when every operation maps to a named function.",
      "Read and write capabilities need different approval and authorization boundaries."
    ],
    nextSteps: [
      "Add user authentication and per-operation permissions",
      "Require confirmation for mutations and destructive actions",
      "Add automated tests for tool dispatch and catalog failures"
    ],
    links: [
      {
        label: "View source on GitHub",
        href: "https://github.com/Kesehet/storeAi",
        public: true
      }
    ],
    media: [
      {
        src: "/images/projects/screenshots/storeai-repository-ui.png",
        alt: "Actual StoreAI repository interface showing the SQL Chat Assistant input",
        kind: "screenshot",
        caption:
          "Actual capture of the browser interface committed in the StoreAI repository."
      }
    ],
    featured: true,
    secondary: false,
    visibility: "public",
    verificationStatus: "Implementation verified",
    todoNotes: []
  },
  {
    slug: "supportpromax-voice-pipeline",
    title: "SupportProMax Voice Pipeline",
    eyebrow: "Speech capture, transcription and synthesis",
    valueProposition:
      "Turns a recorded support message into inspectable text and synthesized speech through a staged local workflow.",
    conciseDescription:
      "A Python prototype that records microphone input, transcribes a WAV file with ElevenLabs and converts the resulting text back into an MP3 response.",
    detailedCaseStudy:
      "The repository verifies the important media stages independently: device discovery and microphone capture, speech-to-text, an editable text boundary, text-to-speech and a separate speech-to-speech experiment. That separation matters because audio capture, remote inference and streamed output fail differently and need inspectable intermediate artifacts.",
    category: "AI & data",
    statusLabel: "Voice pipeline prototype",
    technologies: ["Python", "ElevenLabs", "NumPy", "SoundDevice", "SciPy"],
    businessProblem:
      "Voice support workflows need a reliable way to capture a request, inspect what was understood and produce an audible response.",
    users: "Support teams experimenting with voice-message and call-assistance workflows.",
    majorFeat:
      "Coordinated audio capture, speech recognition, an editable transcript boundary and streamed speech synthesis while preserving each intermediate artifact.",
    solution:
      "Python records mono audio to WAV, sends the file to speech-to-text, extracts the transcript defensively across SDK response shapes and streams synthesized speech into an MP3. A separate script tests direct speech-to-speech conversion.",
    role:
      "Implemented the recording utility and the ElevenLabs transcription, synthesis and speech-to-speech experiments.",
    majorFeatures: [
      "Input-device discovery and microphone recording",
      "WAV normalization and persistence",
      "Speech-to-text conversion",
      "Editable transcript stage",
      "Stream-safe MP3 synthesis and speech-to-speech experiment"
    ],
    technicalChallenges: [
      "Handling audio devices and capture failures clearly",
      "Normalizing different SDK transcription response shapes",
      "Writing either byte or streamed synthesis responses safely"
    ],
    architecture: [
      "SoundDevice captures mono audio and SciPy writes a WAV artifact.",
      "ElevenLabs speech-to-text returns a transcript for inspection or editing.",
      "The transcript passes to text-to-speech and streams into an MP3 file.",
      "A separate path converts an input voice recording directly to another voice."
    ],
    securityConsiderations: [
      "API keys belong only in ignored environment configuration.",
      "Recorded speech and transcripts need consent, retention and deletion rules.",
      "A deployed support flow needs authentication and limits on file type, size and duration."
    ],
    outcomes: [
      "An implemented capture-to-transcript-to-speech path",
      "Saved input and output artifacts make each stage independently reviewable"
    ],
    evidence: [
      "Microphone capture and WAV-writing utility",
      "Speech-to-text followed by streamed text-to-speech",
      "Separate speech-to-speech conversion script",
      "Repository audio artifacts from the experiments"
    ],
    lessons: [
      "Intermediate transcripts are essential for debugging and human review.",
      "A voice assistant is more reliable when media stages remain independently testable."
    ],
    nextSteps: [
      "Add the context-aware support response stage",
      "Replace sample artifacts with automated fixture-based tests",
      "Add a consent-aware interface and audio retention controls"
    ],
    links: [
      {
        label: "View source on GitHub",
        href: "https://github.com/Kesehet/supportpromax",
        public: true
      }
    ],
    media: [],
    featured: true,
    secondary: false,
    visibility: "public",
    verificationStatus: "Implementation verified",
    todoNotes: []
  },
  {
    slug: "social-content-generation-pipeline",
    title: "Social Content Generation Pipeline",
    eyebrow: "Reviewable multi-stage media automation",
    valueProposition:
      "Moves content ideas through AI planning, asset generation, human review and webhook delivery without collapsing the workflow into one model call.",
    conciseDescription:
      "A Python, PHP and MariaDB system combining Gemini orchestration, reusable image and video templates, persisted pipeline state, a review dashboard and Make webhook delivery.",
    detailedCaseStudy:
      "The project treats content generation as an operational pipeline. Ideas, runs, outputs and template requests are persisted separately. Gemini produces structured plans, rendering helpers create image and video assets with metadata, a PHP dashboard exposes drafts for review, and approved payloads can move through a Make webhook. The repository history shows the workflow evolving through independently testable services rather than a single generation script.",
    category: "Automation",
    statusLabel: "Multi-stage content workflow",
    technologies: ["Python", "PHP", "MariaDB", "Gemini", "Pillow", "Selenium", "Make"],
    businessProblem:
      "Media teams repeatedly turn ideas and source material into multiple social formats, then track assets, review drafts and transfer approved content manually.",
    users: "Research, media and marketing teams producing repeatable social content.",
    majorFeat:
      "Separated idea intake, model planning, persistent run state, template rendering, review and webhook delivery into inspectable stages with reusable media helpers.",
    solution:
      "A Python generator uses structured Gemini calls and template metadata to produce assets and sidecars. SQLAlchemy persistence records ideas, runs and outputs. A PHP dashboard reads the same operational data, previews drafts and builds Make webhook payloads for downstream delivery.",
    role:
      "Designed and developed the generator orchestration, persistence model, reusable media tooling, review dashboard and webhook-driven delivery workflow.",
    majorFeatures: [
      "Persisted ideas, pipeline runs, outputs and template requests",
      "Gemini structured planning and content-type guidance",
      "Reusable image, carousel and video template helpers",
      "Asset metadata and lineage",
      "PHP review dashboard and Make webhook previews"
    ],
    technicalChallenges: [
      "Normalizing model responses into serializable pipeline records",
      "Keeping generated assets traceable to prompts, templates and source ideas",
      "Allowing human review and delivery retries without regenerating the entire workflow"
    ],
    architecture: [
      "MariaDB stores content ideas, pipeline runs, outputs, templates and social drafts.",
      "Python orchestration invokes Gemini functions and persists normalized results.",
      "Rendering helpers create media assets and metadata sidecars.",
      "A PHP dashboard reviews drafts and dispatches approved payloads through Make webhooks."
    ],
    securityConsiderations: [
      "Model, database and webhook credentials must remain in protected environment configuration.",
      "Remote source extraction needs allowlists, timeouts and content-size limits.",
      "Publishing actions require authenticated approval and an auditable delivery record."
    ],
    outcomes: [
      "A reusable generator and dashboard workflow spanning planning, rendering and review",
      "Persistent pipeline records make generation and delivery states inspectable"
    ],
    evidence: [
      "Python generator package and Gemini pipeline orchestration",
      "MariaDB repositories for ideas, runs, outputs and social posts",
      "Reusable image, video and carousel template tooling",
      "PHP dashboard services and Make webhook client"
    ],
    lessons: [
      "Creative automation needs state and review boundaries as much as it needs model prompts.",
      "Reusable templates make visual output more dependable than unconstrained generation."
    ],
    nextSteps: [
      "Add end-to-end tests around failed rendering and webhook retries",
      "Formalize role-based review and publishing permissions",
      "Document production storage, queue and cleanup policies"
    ],
    links: [],
    media: [],
    featured: true,
    secondary: false,
    visibility: "withhold-link",
    verificationStatus: "Implementation reviewed",
    todoNotes: ["Repository is private; publish only approved screenshots or a public demonstration."]
  },
  {
    slug: "the-smart-project",
    title: "The Smart Project",
    eyebrow: "Managed IoT provisioning and device operations",
    valueProposition:
      "Connects factory flashing, customer onboarding, device ownership, live status and signed code updates across one managed device lifecycle.",
    conciseDescription:
      "An IoT platform with a PHP control plane, Python build and factory workers, a MicroPython ESP32 runtime, device onboarding, telemetry, logs and signed OTA updates.",
    detailedCaseStudy:
      "The difficult part is the lifecycle between manufacturing and normal operation. A factory worker claims queued jobs, flashes firmware and installs identity last. A customer then provisions Wi-Fi through a device-hosted access point. Once online, the runtime registers, claims ownership, reports heartbeat and logs, polls manifests and applies signed code-only OTA bundles. The repository includes migrations, runtime tests and smoke workflows around those boundaries.",
    category: "Full-stack",
    statusLabel: "Implemented IoT device platform",
    technologies: ["PHP", "Python", "MicroPython", "MariaDB", "ESP32", "HMAC", "SHA-256"],
    businessProblem:
      "Connected-device customers need hardware to move safely from factory flashing to ownership, network onboarding, monitoring and controlled updates.",
    users: "Factory operators, device-platform administrators and customers managing connected hardware.",
    majorFeat:
      "Connected secure factory provisioning, customer Wi-Fi onboarding, device claim, heartbeat and logs, customer code execution and signed OTA into one device lifecycle.",
    solution:
      "The PHP control plane manages users, devices, releases and factory jobs. Python workers validate code and flash USB-connected hardware. The MicroPython runtime handles onboarding, registration, heartbeats, logs, manifest polling and HMAC-verified customer-code updates.",
    role:
      "Designed and implemented the control-plane, build-worker, factory-client and device-runtime boundaries, including onboarding and update verification.",
    majorFeatures: [
      "Queued factory flashing and verification",
      "Device-hosted Wi-Fi onboarding",
      "Customer device claiming and fleet views",
      "Heartbeat, signal, status and error logging",
      "Signed code-only OTA updates",
      "Hardware profiles and GPIO aliases"
    ],
    technicalChallenges: [
      "Preserving device identity across factory, onboarding and ownership transitions",
      "Recovering safely when connectivity or an update fails",
      "Coordinating PHP services, Python workers and a constrained MicroPython runtime"
    ],
    architecture: [
      "A PHP and MariaDB control plane stores devices, releases, users and factory jobs.",
      "A Python build server validates customer code and emits artifacts.",
      "A USB factory client flashes MicroPython, runtime files and device identity.",
      "The ESP32 runtime onboards Wi-Fi, claims ownership, reports state and verifies OTA bundles."
    ],
    securityConsiderations: [
      "Factory and OTA secrets require rotation, scoped access and protected storage.",
      "Device claims need authenticated ownership rules and replay resistance.",
      "Onboarding access points and pending Wi-Fi credentials require explicit timeout and cleanup behavior."
    ],
    outcomes: [
      "An implemented factory-to-customer device lifecycle",
      "Tested runtime, onboarding, build and backend paths",
      "Operational views for devices, releases, logs and deployments"
    ],
    evidence: [
      "PHP backend routes, migrations and operator pages",
      "Python build and factory workers",
      "MicroPython onboarding, runtime and OTA clients",
      "Automated tests plus backend and web smoke scripts"
    ],
    lessons: [
      "IoT reliability depends on lifecycle boundaries, not only sensor or relay code.",
      "Identity and update verification must be designed before devices leave the factory."
    ],
    nextSteps: [
      "Harden production secret rotation and device-key provisioning",
      "Add fault-injection tests for interrupted flashing, onboarding and OTA",
      "Instrument fleet-level reliability and update rollout metrics"
    ],
    links: [],
    media: [],
    featured: true,
    secondary: false,
    visibility: "withhold-link",
    verificationStatus: "Implementation verified",
    todoNotes: ["Repository is private; publish approved device and dashboard captures when available."]
  },
  {
    slug: "ai-desktop-agent",
    title: "AI Desktop Agent",
    eyebrow: "Local-first automation with approval gates",
    valueProposition:
      "Lets a local model plan browser and desktop actions while keeping dangerous operations behind explicit human approval.",
    conciseDescription:
      "A Python and Flask desktop-automation agent using Ollama, Selenium, PyAutoGUI, session scratchpads, action logs and safety gates for high-impact tools.",
    detailedCaseStudy:
      "The central engineering problem is not giving a model more tools; it is deciding which tools may run automatically. The agent observes visible window state, asks a local model for the next action and separates routine navigation from terminal commands, submissions, downloads, purchases and destructive actions. Each session retains an action trace and scratchpad while approval cards keep high-impact decisions with the user.",
    category: "Desktop",
    statusLabel: "Local-first agent prototype",
    technologies: ["Python", "Flask", "Ollama", "Selenium", "PyAutoGUI", "PowerShell"],
    businessProblem:
      "Desktop automation can remove repetitive work, but model-driven actions need visible state, constrained tools and human control over consequential operations.",
    users: "Technical users experimenting with local-first browser and desktop automation.",
    majorFeat:
      "Separated automatically executable navigation from dangerous desktop and terminal actions through a typed tool layer, approval gate and per-session audit trail.",
    solution:
      "A Flask interface creates agent sessions. The controller combines visible-window state and scratchpad context, asks Ollama for a proposed tool action and routes it through safety rules. Safe navigation can continue automatically; dangerous operations generate an approval card before execution.",
    role:
      "Built the agent loop, local-model integration, browser and desktop tools, safety classification, session state and web interface.",
    majorFeatures: [
      "Local Ollama planning loop",
      "Selenium browser actions and public web reading",
      "PyAutoGUI keyboard and mouse automation",
      "Approval cards for dangerous actions",
      "Session scratchpad, logs and action history",
      "Unit tests for configuration, sessions, safety and tools"
    ],
    technicalChallenges: [
      "Giving the model enough observable state without silently capturing sensitive content",
      "Classifying actions by consequence instead of treating every tool equally",
      "Keeping a multi-step agent stoppable, inspectable and bounded"
    ],
    architecture: [
      "The Flask UI creates sessions and displays proposals, approvals and activity.",
      "An agent controller builds prompts from visible state and scratchpad memory.",
      "Typed browser, web, terminal and desktop tools execute through a safety layer.",
      "Session storage and logs preserve progress and decisions locally."
    ],
    securityConsiderations: [
      "Dangerous actions must remain approval-gated and narrowly parameterized.",
      "Scratchpads and logs must exclude passwords, tokens and private content.",
      "Terminal commands and browser submissions require allowlists, timeouts and visible targets."
    ],
    outcomes: [
      "A working local-first action loop with explicit approval boundaries",
      "Inspectable session traces and tests across the safety and tool layers"
    ],
    evidence: [
      "Agent controller, prompt builder and Ollama client",
      "Browser, desktop, terminal and web-reader tools",
      "Safety rules and approval workflow",
      "Flask interface plus configuration and behavior tests"
    ],
    lessons: [
      "Agent safety is primarily a product and tool-boundary problem.",
      "Local models still need strict controls because the effects occur outside the model."
    ],
    nextSteps: [
      "Add policy tests for more ambiguous and compound actions",
      "Introduce replayable dry-run plans before multi-step execution",
      "Package the local runtime and document supported desktop environments"
    ],
    links: [],
    media: [],
    featured: false,
    secondary: true,
    visibility: "withhold-link",
    verificationStatus: "Implementation reviewed",
    todoNotes: ["Repository is private; add an approved product walkthrough before publishing code."]
  },
  {
    slug: "rook-and-roll",
    title: "Rook & Roll",
    eyebrow: "Turn-based board and behavior systems",
    valueProposition:
      "Combines dice-orientation movement, turn phases, traps and configurable chess-inspired enemy behavior in a web-playable prototype.",
    conciseDescription:
      "A vanilla JavaScript board-game prototype with dice rotation state, a deterministic turn engine, trap timing and a rule-driven enemy behavior editor.",
    detailedCaseStudy:
      "Rook & Roll has progressed beyond its original landing-page bootstrap. The current repository implements a board state, dice orientation, turn phases, traps and a behavior engine. Enemies select the highest-priority matching rule from conditions such as line-of-sight, range, turn cadence and state, then execute movement, telegraph, attack or logging actions. The editor makes those systems visible rather than hard-coding one enemy sequence.",
    category: "Game development",
    statusLabel: "Web-playable systems prototype",
    technologies: ["JavaScript", "HTML", "CSS", "GitHub Pages"],
    businessProblem:
      "A compact tactical game needs enemies and hazards that remain understandable and configurable as new board rules are introduced.",
    users: "Players and designers experimenting with a turn-based dice and chess-inspired combat system.",
    majorFeat:
      "Built a data-driven behavior system that combines prioritized conditions, chess-derived movement, telegraphed actions, traps and deterministic turn phases.",
    solution:
      "JavaScript modules separate state, input, rendering, turn execution and enemy behavior. The player’s die rotates with grid movement. Enemies evaluate editable rules, traps trigger on turn cadence, and the UI exposes board configuration and an event log.",
    role:
      "Developed the modular board prototype, dice state, turn engine, traps, configurable enemy rules and GitHub Pages delivery.",
    majorFeatures: [
      "Grid movement with six-sided dice orientation",
      "Turn phases and event log",
      "Cadence-driven traps and effects",
      "Rook, bishop, queen and knight movement rules",
      "Priority-based behavior conditions and actions",
      "In-browser enemy and board configuration"
    ],
    technicalChallenges: [
      "Maintaining correct die faces across four movement directions",
      "Keeping enemy decisions deterministic while allowing configurable rules",
      "Separating state mutation from input and rendering"
    ],
    architecture: [
      "State modules own the board, player, dice, traps and enemies.",
      "The turn engine advances traps and enemies through explicit phases.",
      "A behavior engine matches prioritized conditions and executes bounded actions.",
      "Rendering and configuration modules expose the current state in the browser."
    ],
    securityConsiderations: [
      "Imported configuration should be schema-validated before use.",
      "Untrusted text rendered in the editor and event log must remain escaped.",
      "Repository artwork and audio should be licensed before a fuller release."
    ],
    outcomes: [
      "A deployed, web-playable systems prototype",
      "Reusable rule structures for enemy behavior and trap cadence"
    ],
    evidence: [
      "Dice rotation and board-state modules",
      "Turn, trap and event-log implementation",
      "Condition/action behavior engine",
      "Interactive configuration editor and GitHub Pages workflow"
    ],
    lessons: [
      "Data-driven rules make tactical behavior easier to inspect and extend.",
      "Explicit turn phases prevent hazards and enemies from mutating state unpredictably."
    ],
    nextSteps: [
      "Add authored levels and a progression loop",
      "Add automated tests for dice orientation and behavior priority",
      "Polish player feedback, onboarding and game-over states"
    ],
    links: [
      {
        label: "Play the prototype",
        href: "https://kesehet.github.io/rook-and-roll/",
        public: true
      },
      {
        label: "View source on GitHub",
        href: "https://github.com/Kesehet/rook-and-roll",
        public: true
      }
    ],
    media: [
      {
        src: "/images/projects/screenshots/rook-and-roll-prototype.png",
        alt: "Actual Rook and Roll browser prototype showing the dice player on a grid",
        kind: "screenshot",
        caption:
          "Actual capture of the deployed repository build showing board state, dice orientation and the turn interface."
      }
    ],
    featured: false,
    secondary: true,
    visibility: "public",
    verificationStatus: "Implementation verified",
    todoNotes: []
  },
  {
    slug: "custom-file-manager",
    title: "Custom File Manager",
    eyebrow: "Binary file storage service",
    valueProposition:
      "Provides a compact upload-and-retrieve workflow backed by FastAPI and SQLite binary storage.",
    conciseDescription:
      "An early FastAPI service that accepts uploaded files, stores their binary content in SQLite and returns an identifier that can retrieve the file later.",
    detailedCaseStudy:
      "The project demonstrates the complete path between a multipart browser upload, temporary filesystem handling, SQLite binary persistence and an identifier-based download response. Its value is the connected workflow rather than production readiness: the repository also documents the missing authentication boundary explicitly.",
    category: "Full-stack",
    statusLabel: "Early file-service prototype",
    technologies: ["Python", "FastAPI", "SQLite", "Uvicorn", "HTML"],
    businessProblem:
      "Small services sometimes need a simple way to upload a file, retain it with a stable identifier and retrieve it later.",
    users: "Developers prototyping file-backed workflows and internal utilities.",
    majorFeat:
      "Connected multipart upload, temporary file handling, SQLite BLOB persistence and identifier-based download into one working service path.",
    solution:
      "A browser form posts a file to FastAPI. Python writes the temporary file, stores its binary data and path in SQLite, returns the inserted identifier and reconstructs the file for a later download response.",
    role:
      "Built the FastAPI endpoints, SQLite BLOB persistence helpers and minimal upload interface.",
    majorFeatures: [
      "Multipart file upload",
      "SQLite BLOB persistence",
      "Generated record identifier",
      "Identifier-based download",
      "Minimal browser upload form"
    ],
    technicalChallenges: [
      "Moving binary data safely between multipart input, filesystem and SQLite",
      "Reconstructing the original file for a download response",
      "Maintaining a stable record-to-file mapping"
    ],
    architecture: [
      "An HTML form submits multipart data to FastAPI.",
      "The service writes a temporary copy and stores bytes plus file metadata in SQLite.",
      "A download endpoint loads the BLOB, reconstructs the file and returns FileResponse."
    ],
    securityConsiderations: [
      "The repository has no authentication and must not be deployed publicly in its current form.",
      "File names, content types, sizes and storage paths need strict validation.",
      "Malware scanning, quotas and retention cleanup are required for shared use."
    ],
    outcomes: [
      "A working upload, persistence and download path",
      "A concise demonstration of binary storage through a web API"
    ],
    evidence: [
      "FastAPI upload and download endpoints",
      "SQLite insert and BLOB reconstruction helpers",
      "Repository schema and browser form"
    ],
    lessons: [
      "File storage prototypes become security-sensitive as soon as they accept untrusted input.",
      "Stable metadata and cleanup policies matter as much as the raw binary transfer."
    ],
    nextSteps: [
      "Add authentication and per-user ownership",
      "Move file bytes to managed object storage while retaining metadata in the database",
      "Add validation, malware scanning, quotas and automated cleanup"
    ],
    links: [
      {
        label: "View source on GitHub",
        href: "https://github.com/Kesehet/CustomFileManager",
        public: true
      }
    ],
    media: [],
    featured: false,
    secondary: true,
    visibility: "public",
    verificationStatus: "Implementation verified",
    todoNotes: []
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
