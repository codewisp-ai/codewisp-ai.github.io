import type { Project, ExperienceItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: "Anmol Maheshwari",
  title: "Full Stack & Backend Systems Engineer",
  subtitle: "Specializing in Distributed Microservices, Event-Driven Architectures & Production AI Systems",
  location: "AMU, Aligarh, India",
  email: "maheshwarianmol2292@gmail.com",
  phone: "+91 9258224850",
  github: "https://github.com/codewisp-ai",
  githubUsername: "codewisp-ai",
  linkedin: "https://www.linkedin.com/in/anmol-maheshwari-amu/",
  leetcode: "https://leetcode.com/u/maheshwarianmol2292/",
  bio: "Full-Stack and Backend Engineering student with a 9.8 CGPA, engineering production-grade web applications, resilient microservice backends, real-time event pipelines, and multi-modal AI systems. Experienced in architecting Redis Streams, transactional database layers, and vector RAG workflows with FastAPI, Node.js, and Gemini AI.",
  quickStats: [
    { label: "CGPA (3rd Year)", value: "9.8 / 10" },
    { label: "Hackathon Podiums", value: "3 Wins" },
    { label: "DSA Problems (C++)", value: "200+ Solved" },
    { label: "Event Pipeline P99", value: "<15ms Latency" },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "systemsketch",
    title: "SystemSketch",
    tagline: "AI-Powered Distributed System Design & Microservice Topology Synthesizer",
    category: "ai",
    featured: true,
    tags: ["Generative AI", "Microservices", "System Design", "Distributed Systems", "LLM Agents", "Topology Engine"],
    githubUrl: "https://github.com/codewisp-ai",
    highlights: [
      "3rd Place winner at System Collapse Hackathon — built with a collaborative engineering team.",
      "Transforms high-level requirements and natural language specs into production-grade distributed architecture topologies.",
      "Synthesizes microservice breakdowns, message broker selection (Kafka/Redis Streams), database sharding strategies, and caching tiers.",
      "Simulates real-world request paths, predicting network latency bottlenecks and calculating single points of failure (SPOF)."
    ],
    architectureOverview: "Combines multi-agent LLM reasoning with an interactive directed acyclic graph (DAG) topology visualizer to automatically compose microservice boundaries, API gateways, cache-aside layers, and database partitioning topologies.",
    architectureFlow: [
      {
        step: 1,
        title: "Intent & Spec Ingestion",
        description: "Parses architectural constraints (e.g., target throughput, read/write ratios, SLA guarantees) into structured system schemas.",
        technology: "Prompt Engineering & Structured JSON Output"
      },
      {
        step: 2,
        title: "Microservice Topology Generator",
        description: "Decomposes monolithic requirements into decoupled microservice domains, inter-service gRPC/REST contracts, and event channels.",
        technology: "LLM Agentic Decomposition"
      },
      {
        step: 3,
        title: "Data & Caching Tier Synthesizer",
        description: "Determines optimal persistence tiers (PostgreSQL/MongoDB) and caching strategies (Redis Write-Through / Cache-Aside).",
        technology: "Rule Engine & Heuristic Optimizer"
      },
      {
        step: 4,
        title: "Bottleneck & Latency Simulation",
        description: "Traces simulated request journeys end-to-end, computing synthetic p95/p99 latencies and flagging missing circuit breakers.",
        technology: "Interactive DAG Graph Engine"
      }
    ],
    metrics: [
      { label: "Hackathon Placement", value: "3rd Place" },
      { label: "Synthesis Time", value: "<2.4s" },
      { label: "Architecture Archetypes", value: "12+ Patterns" },
      { label: "Component Node Accuracy", value: "94.8%" }
    ],
    systemDesignSpecs: {
      pattern: "Multi-Agent System Architecture Synthesis & Directed Acyclic Graph Modeling",
      throughputOrLatency: "~2.4s full topology synthesis with live interactive DAG rendering",
      resilience: "Deterministic constraint verification with fallback to verified reference topologies",
      storage: "In-memory graph state representation with exportable YAML / Docker Compose manifests"
    }
  },
  {
    id: "catalogforge",
    title: "CatalogForge",
    tagline: "High-Performance E-Commerce Backend & Analytics Engine with Redis Caching",
    category: "microservices",
    featured: true,
    tags: ["Node.js", "Redis", "MongoDB", "ACID Transactions", "ESR Indexing", "Docker", "JWT Rotation"],
    githubUrl: "https://github.com/codewisp-ai/CatalogForge",
    highlights: [
      "Engineered layered architecture (Controller → Service → Repository) engineered for enterprise e-commerce traffic.",
      "Multi-document MongoDB ACID transactions with atomic inventory deductions preventing concurrent purchase race conditions.",
      "Redis Cache-Aside implementation with automatic TTL expiration, fallback resiliency on Redis outage, and cache telemetry.",
      "Optimized compound MongoDB indexing adhering strictly to ESR (Equality, Sort, Range) principles `{ category: 1, price: 1, stock: 1 }`.",
      "Hardened authentication: Refresh Token Rotation, HTTP-only cookies, session family tracking, and fraud reuse detection with automatic session revocation."
    ],
    architectureOverview: "A resilient service-repository decoupled backend architecture integrating high-speed in-memory Redis caching with atomic transactional MongoDB persistence to deliver sub-millisecond catalog reads and race-condition-free checkouts.",
    architectureFlow: [
      {
        step: 1,
        title: "Gateway & Authentication",
        description: "Validates 15-minute access tokens with HTTP-only refresh token rotation and session family theft detection.",
        technology: "Express Middleware & JWT Verification"
      },
      {
        step: 2,
        title: "Cache-Aside Query Layer",
        description: "Checks Redis for catalog queries; on cache miss, queries MongoDB and repopulates Redis with calculated TTL.",
        technology: "Redis In-Memory Key-Value Store"
      },
      {
        step: 3,
        title: "ESR Indexed Catalog Engine",
        description: "Executes lean queries utilizing compound indexes for category filtering, price sorting, and stock range scanning.",
        technology: "MongoDB Index Engine"
      },
      {
        step: 4,
        title: "Atomic Transactional Checkout",
        description: "Executes multi-document transactions to deduct stock atomically and generate immutable purchase history snapshots.",
        technology: "MongoDB Distributed Transactions"
      }
    ],
    metrics: [
      { label: "Read Query Latency", value: "<4ms (Cached)" },
      { label: "Cache Hit Ratio", value: "~92%" },
      { label: "Inventory Race Conditions", value: "0% Error" },
      { label: "Token Rotation Lifespan", value: "15m / 7d" }
    ],
    systemDesignSpecs: {
      pattern: "Layered Clean Architecture (Controller -> Service -> Repository) with Cache-Aside",
      throughputOrLatency: "Sub-5ms cached catalog responses; ~38ms transactional checkout execution",
      resilience: "Graceful Redis fallback to primary MongoDB queries with circuit breaker patterns",
      storage: "MongoDB Atlas cluster with compound ESR indexing and isolated Dockerized services"
    }
  },
  {
    id: "civiscan",
    title: "CiviScan",
    tagline: "AI-Powered Civic Issue Reporting Platform with Multi-Modal Vision & Real-Time Alerts",
    category: "ai",
    featured: true,
    tags: ["Next.js", "TypeScript", "Node.js", "Gemini Vision AI", "Socket.IO", "Leaflet", "MongoDB", "AWS"],
    githubUrl: "https://github.com/codewisp-ai/CiviScan-AI",
    highlights: [
      "End-to-end civic reporting platform empowering citizens to report infrastructure hazards via camera, audio, or form inputs.",
      "Integrated Gemini Vision multi-modal API to analyze image submissions, automatically classifying problem category, severity score, and responsible municipality department.",
      "Engineered rule-based priority engine with heuristic duplicate and spam detection to prevent civic department inundation.",
      "Built real-time alert dispatching to government administrator dashboards via Socket.IO with dynamic Leaflet geospatial heatmaps.",
      "Production deployment on AWS (EC2, Amplify) backed by MongoDB Atlas and Cloudinary media delivery."
    ],
    architectureOverview: "Seamlessly connects citizen reports to municipal responders using Google Gemini Vision AI to triage raw photos, compute severity scores, and stream geolocated alert payloads in real-time.",
    architectureFlow: [
      {
        step: 1,
        title: "Multi-Modal Citizen Capture",
        description: "Citizens upload geolocation, photos, or voice notes through a responsive Next.js frontend.",
        technology: "Next.js & Cloudinary Media Upload"
      },
      {
        step: 2,
        title: "Gemini Vision Inference",
        description: "Visual analysis extracts infrastructure defect type (pothole, structural damage, water mains) and computes severity level.",
        technology: "Google Gemini Vision API"
      },
      {
        step: 3,
        title: "Triage & Heuristic Deduplication",
        description: "Calculates spatial radius & visual similarity to merge duplicate civic complaints and assigns department routing.",
        technology: "Express.js & MongoDB Geospatial Indexes"
      },
      {
        step: 4,
        title: "Real-Time Municipal Dispatch",
        description: "Streams immediate triage alerts to city engineers with Leaflet heatmaps and interactive status workflows.",
        technology: "Socket.IO WebSockets & Leaflet.js"
      }
    ],
    metrics: [
      { label: "Vision Triage Latency", value: "~1.8s" },
      { label: "Duplicate Detection Accuracy", value: "89.4%" },
      { label: "Real-Time Alert Latency", value: "<120ms" },
      { label: "Cloud Deployment", value: "AWS EC2 + Amplify" }
    ],
    systemDesignSpecs: {
      pattern: "Event-Driven Asynchronous AI Ingestion with WebSocket Broadcast & Spatial Indexing",
      throughputOrLatency: "~1.8s vision inference, <120ms WebSocket push to municipal dashboards",
      resilience: "Cloudinary CDN fallback with MongoDB 2dsphere indexing for high-density spatial queries",
      storage: "MongoDB Atlas geospatial collections with Cloudinary encrypted media storage"
    }
  },
  {
    id: "vortexmq",
    title: "VortexMQ",
    tagline: "High-Throughput Event-Driven Notification Engine with Redis Streams & Auto-Claim Recovery",
    category: "distributed",
    featured: true,
    tags: ["Node.js", "Redis Streams", "Docker", "Socket.IO", "Prometheus", "Grafana", "Event-Driven"],
    githubUrl: "https://github.com/codewisp-ai/VortexMQ",
    highlights: [
      "Horizontally scalable event-driven notification pipeline using Redis Streams and Consumer Groups to decouple HTTP ingestion from worker pools.",
      "Non-blocking Redis ZSET delay queues implementing exponential backoff with randomized jitter and Dead Letter Queue (DLQ).",
      "Self-healing crash recovery using XAUTOCLAIM to reclaim stalled jobs from the Pending Entries List (PEL).",
      "Instrumented end-to-end with Prometheus and Grafana dashboards for continuous p99 latency and DLQ-depth observability."
    ],
    architectureOverview: "A decoupled, horizontally elastic event processing architecture engineered to handle bursty notification spikes without dropped messages or cascading worker failures.",
    architectureFlow: [
      {
        step: 1,
        title: "High-Speed Ingestion",
        description: "HTTP endpoints push notification tasks immediately into Redis Streams without blocking client threads.",
        technology: "Node.js & Redis Streams (XADD)"
      },
      {
        step: 2,
        title: "Consumer Group Execution",
        description: "Distributed worker nodes pull exclusive batches of messages from the stream for parallel dispatch.",
        technology: "Redis Consumer Groups (XREADGROUP)"
      },
      {
        step: 3,
        title: "Crash Recovery & Pel Reclamation",
        description: "Automated supervisor routine runs XAUTOCLAIM to identify and reassign stalled or crashed worker tasks.",
        technology: "Redis XAUTOCLAIM & PEL Monitoring"
      },
      {
        step: 4,
        title: "Telemetry & Metric Export",
        description: "Prometheus scrapes worker process metrics, export p99 processing time, stream backlog, and DLQ depth.",
        technology: "Prometheus Exporter & Grafana"
      }
    ],
    metrics: [
      { label: "P99 Processing Time", value: "<12ms" },
      { label: "Zero Message Loss", value: "100% Reliable" },
      { label: "Crash Recovery Time", value: "<1.5s" },
      { label: "Observability", value: "Prometheus + Grafana" }
    ],
    systemDesignSpecs: {
      pattern: "Consumer Group Stream Architecture with Distributed Delayed Queues & DLQ",
      throughputOrLatency: "10,000+ events/sec throughput capability with sub-15ms p99 latency",
      resilience: "Self-healing PEL reconciliation using XAUTOCLAIM; exponential backoff delay queue",
      storage: "Redis AOF (Append Only File) in-memory persistence with Docker orchestration"
    }
  },
  {
    id: "signalrank",
    title: "SignalRank AI",
    tagline: "Hybrid AI Candidate Ranking Engine with Bi-Encoder & LLM Chain-of-Thought",
    category: "ai",
    featured: false,
    tags: ["Python", "FastAPI", "FAISS", "Sentence-Transformers", "Gemini API", "Vector Search"],
    githubUrl: "https://github.com/codewisp-ai/Signal-Rank-AI",
    highlights: [
      "Engineered 3-stage hybrid candidate ranking pipeline: bi-encoder vector retrieval via FAISS, cross-encoder precision re-ranking, and LLM chain-of-thought justification.",
      "Filters 10,000 candidate profiles down to an auditable, justified top-10 shortlist in ~3.1 seconds.",
      "Engineered archetype-weighted signal fusion model with demographic bias mitigation and regional normalization.",
      "Exposes production-ready REST endpoints via asynchronous FastAPI containerized with Docker."
    ],
    architectureOverview: "Combines dense vector indexing with deep cross-attention re-ranking and LLM reasoning to balance candidate retrieval speed with explainable semantic matching.",
    architectureFlow: [
      {
        step: 1,
        title: "Vector Embeddings & Retrieval",
        description: "Encodes candidate resumes using BAAI/bge-large-en-v1.5 and executes nearest neighbor search over 10k vectors.",
        technology: "FAISS Vector Index & Dense Embeddings"
      },
      {
        step: 2,
        title: "Cross-Encoder Re-Ranking",
        description: "Applies heavy cross-attention on candidate-role pairs to score mutual semantic relevance without vector compression loss.",
        technology: "Sentence-Transformers Cross-Encoder"
      },
      {
        step: 3,
        title: "LLM Chain-of-Thought Auditing",
        description: "Evaluates shortlisted candidates using Gemini reasoning to output qualitative rationales and mitigate demographic bias.",
        technology: "Gemini API CoT Prompting"
      },
      {
        step: 4,
        title: "Signal Fusion & FastAPI Delivery",
        description: "Fuses algorithmic scores with qualitative weights and exposes structured candidate reports via async API.",
        technology: "FastAPI & Pydantic Schemas"
      }
    ],
    metrics: [
      { label: "Search Space Reduction", value: "10,000 → 10" },
      { label: "Total Pipeline Latency", value: "~3.1s" },
      { label: "Recall Rate", value: "96.2%" },
      { label: "FastAPI P95", value: "<18ms" }
    ],
    systemDesignSpecs: {
      pattern: "3-Stage Hybrid Retrieval & Multi-Signal Fusion Ranking Pipeline",
      throughputOrLatency: "3.1s end-to-end for 10,000 vectors down to justified top-10",
      resilience: "Pre-embedding demographic normalization with deterministic cross-encoder fallback",
      storage: "FAISS FlatL2 vector index serialized with Dockerized FastAPI microservice"
    }
  },
  {
    id: "aegisgate",
    title: "AegisGate",
    tagline: "High-Concurrency API Gateway with Atomic Redis Lua HTB Rate Limiting",
    category: "microservices",
    featured: false,
    tags: ["FastAPI", "PostgreSQL", "Redis Lua", "HTB Rate Limiting", "Docker", "Async Engine"],
    githubUrl: "https://github.com/codewisp-ai",
    highlights: [
      "Engineered high-concurrency API Gateway utilizing atomic Redis Lua Hierarchical Token Bucket (HTB) rate limiter with elastic burst borrowing.",
      "Asynchronous PostgreSQL database layer utilizing asyncpg and SQLAlchemy for multi-tenant rate quota management and transaction logging.",
      "Comprehensive concurrency testing validating zero rate-limit bypasses under heavy parallel burst traffic.",
      "Docker Compose orchestration with healthcheck-gated dependency startup."
    ],
    architectureOverview: "Low-overhead API proxy enforcing strict per-tenant QoS SLAs using single-roundtrip Lua scripts in Redis to prevent race conditions during high-volume DDoS and spike scenarios.",
    architectureFlow: [
      {
        step: 1,
        title: "Tenant Resolution",
        description: "Extracts API keys and maps tenant tier limits from asynchronous PostgreSQL cache.",
        technology: "FastAPI Dependency Injection"
      },
      {
        step: 2,
        title: "Atomic Lua Token Bucket",
        description: "Executes single-roundtrip Redis Lua script evaluating hierarchical token availability with elastic borrowing.",
        technology: "Redis 7 & Lua Scripting"
      },
      {
        step: 3,
        title: "Audit & Ledger Logging",
        description: "Asynchronously records traffic consumption metrics and quota debits to persistent ledger.",
        technology: "PostgreSQL & Asyncpg"
      }
    ],
    metrics: [
      { label: "Limiter Overhead", value: "<0.8ms" },
      { label: "Concurrency Safety", value: "100% Atomic" },
      { label: "Burst Tolerance", value: "Elastic Borrowing" },
      { label: "Tenant Isolation", value: "Multi-Tier" }
    ],
    systemDesignSpecs: {
      pattern: "Hierarchical Token Bucket (HTB) Gateway with Atomic Redis Lua execution",
      throughputOrLatency: "Sub-millisecond rate check overhead per inbound HTTP request",
      resilience: "Atomic rollback on Lua exceptions and persistent PostgreSQL ledger backing",
      storage: "Redis 7 in-memory cache with PostgreSQL 16 Alpine persistent storage"
    }
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Full Stack Developer (AI-Focused) Intern",
    company: "Bilvaleaf Private Limited",
    location: "Remote / Hybrid",
    period: "June 2026 – Present",
    type: "internship",
    achievements: [
      "Researched and authored a comprehensive technical R&D document proposing 10 AI-powered features across HR operations, employee self-service, and predictive analytics layers of a production HRMS portal.",
      "Evaluated technology stack trade-offs between Node.js, React, FastAPI, MongoDB, ChromaDB, and the Gemini API for enterprise-scale latency and compliance.",
      "Designed the retrieval architecture for a Policy Chatbot RAG system (ChromaDB vector store + Gemini API), proposed as the flagship AI feature for implementation.",
      "Presented the AI feature roadmap to engineering and product stakeholders, incorporating feedback across multiple review rounds into the final proposal document."
    ],
    technologies: ["Node.js", "React", "FastAPI", "MongoDB", "ChromaDB", "Gemini API", "RAG Architecture", "System Design"]
  },
  {
    role: "3rd Place — System Collapse Hackathon",
    company: "SystemSketch Project",
    location: "National Hackathon",
    period: "2026",
    type: "hackathon",
    achievements: [
      "Collaborated in a multidisciplinary engineering team to architect and build SystemSketch, an AI-powered system design synthesizer.",
      "Built the core microservice topology generator and graph mapping logic, converting natural language constraints into distributed architectures.",
      "Awarded 3rd place overall for technical depth, distributed systems rigor, and generative UI execution."
    ],
    technologies: ["Generative UI", "Distributed Systems", "LLM Reasoning", "System Design", "Microservices"]
  },
  {
    role: "2nd Place — Garage Inference Hackathon",
    company: "Atomic PR Surgeon (Solo)",
    location: "National Hackathon",
    period: "2026",
    type: "hackathon",
    achievements: [
      "Single-handedly architected and coded 'Atomic PR Surgeon', an autonomous code review and pull-request repair engine.",
      "Integrated AST parsing with LLM inference to automatically diagnose regression bugs, suggest atomic diffs, and generate test assertions.",
      "Secured 2nd place as a solo contestant against dozens of multi-member teams."
    ],
    technologies: ["Python", "AST Analysis", "LLM Agents", "Git Automation", "CI/CD"]
  },
  {
    role: "1st Place — GDGC Winter of Code",
    company: "Savify / Rescue Blood",
    location: "Google Developer Groups on Campus",
    period: "2025 – 2026",
    type: "hackathon",
    achievements: [
      "Secured 1st Place out of all participants in the GDGC Winter of Code.",
      "Engineered an emergency blood delivery and supply-chain routing platform with real-time geospatial matching and hospital triage notifications.",
      "Implemented low-latency geolocation proximity queries and automated alert dispatching."
    ],
    technologies: ["Full Stack Engineering", "Geospatial Indexing", "WebSockets", "Emergency Routing"]
  },
  {
    role: "B.Tech in Computer Engineering",
    company: "Zakir Husain College of Engineering & Technology, AMU",
    location: "Aligarh, India",
    period: "2024 – 2028 (3rd Year)",
    type: "education",
    achievements: [
      "Outstanding Academic Record with a 9.8 / 10 CGPA.",
      "Rigorous core coursework: Operating Systems, Computer Networks, Database Management Systems, Data Structures & Algorithms, and Self-Study in Large-Scale System Design.",
      "Solved 200+ Competitive Programming and Data Structure & Algorithm problems on LeetCode with C++ as the primary language."
    ],
    technologies: ["C++", "DSA", "Operating Systems", "Computer Networks", "DBMS", "System Design"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend & Distributed Systems",
    iconName: "Server",
    description: "Architecting high-throughput, low-latency microservices with strict consistency and isolation guarantees.",
    skills: [
      { name: "Node.js & Express", level: "Advanced", highlight: true },
      { name: "FastAPI & Python", level: "Advanced", highlight: true },
      { name: "Distributed Systems & Microservices", level: "Advanced", highlight: true },
      { name: "REST API Design & WebSockets", level: "Advanced" },
      { name: "Rate Limiting & Token Buckets", level: "Advanced", highlight: true },
      { name: "Event-Driven Architecture", level: "Advanced", highlight: true },
      { name: "JWT, OAuth2 & Token Rotation", level: "Advanced" },
      { name: "C++ (Competitive Programming)", level: "Advanced" }
    ]
  },
  {
    title: "AI Integrations & LLM Systems",
    iconName: "Cpu",
    description: "Designing deterministic RAG pipelines, vector search engines, and multi-modal generative agents.",
    skills: [
      { name: "Gemini API & Gemini Vision", level: "Advanced", highlight: true },
      { name: "RAG & Vector Retrieval", level: "Advanced", highlight: true },
      { name: "FAISS & ChromaDB", level: "Advanced", highlight: true },
      { name: "LLM Agents & LangChain", level: "Proficient" },
      { name: "Cross-Encoders & Re-ranking", level: "Advanced" },
      { name: "Multi-Modal AI Inference", level: "Advanced", highlight: true }
    ]
  },
  {
    title: "Databases, Caching & Queues",
    iconName: "Database",
    description: "Engineering resilient data layers with optimized indexing, transaction guarantees, and caching tiers.",
    skills: [
      { name: "Redis & Redis Streams", level: "Advanced", highlight: true },
      { name: "Cache-Aside Architecture", level: "Advanced", highlight: true },
      { name: "MongoDB & Compound ESR Indexing", level: "Advanced", highlight: true },
      { name: "PostgreSQL & SQLAlchemy", level: "Proficient" },
      { name: "ACID Multi-Document Transactions", level: "Advanced" },
      { name: "Query Optimization & Indexing", level: "Advanced" }
    ]
  },
  {
    title: "Frontend & Visualization",
    iconName: "Layout",
    description: "Building responsive, telemetry-rich interfaces with modern web standards.",
    skills: [
      { name: "React & Next.js", level: "Advanced", highlight: true },
      { name: "TypeScript", level: "Advanced", highlight: true },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Socket.IO Real-Time Clients", level: "Advanced" },
      { name: "Leaflet.js Geospatial Maps", level: "Proficient" },
      { name: "Recharts & Analytics UI", level: "Proficient" }
    ]
  },
  {
    title: "DevOps & Observability",
    iconName: "Activity",
    description: "Containerizing services, automating delivery pipelines, and instrumenting p99 latency telemetry.",
    skills: [
      { name: "Docker & Docker Compose", level: "Advanced", highlight: true },
      { name: "Prometheus & Grafana", level: "Advanced", highlight: true },
      { name: "AWS (EC2, S3, Amplify, CloudFront)", level: "Proficient" },
      { name: "Git, GitHub & CI/CD", level: "Advanced" },
      { name: "Linux Server Administration", level: "Proficient" }
    ]
  }
];

export const ARCHITECTURE_SHOWCASE = [
  {
    id: "systemsketch",
    name: "SystemSketch",
    badge: "System Collapse Hackathon (3rd Place)",
    headline: "AI-Powered Microservice Topology Synthesizer",
    concept: "Translates high-level system requirements into decoupled microservice architectures, caching policies, and data flow topologies.",
    diagram: [
      { from: "User Specs (NL Prompt)", to: "Agentic Reasoning Pipeline", tech: "LLM Agent" },
      { from: "Agentic Reasoning Pipeline", to: "Service Decomposition Engine", tech: "Domain-Driven Design" },
      { from: "Service Decomposition Engine", to: "Persistence & Cache Allocator", tech: "Redis / Postgres / Mongo" },
      { from: "Persistence & Cache Allocator", to: "Interactive Topology Graph", tech: "Real-Time DAG Canvas" }
    ],
    technicalHighlights: [
      "Natural Language to Microservice Domain Decomposition",
      "Dynamic SPOF (Single Point of Failure) & Bottleneck Detection",
      "Automatic Cache-Aside vs Write-Through Allocation",
      "Container Manifest & Service Contract Generation"
    ]
  },
  {
    id: "catalogforge",
    name: "CatalogForge",
    badge: "High-Performance Backend",
    headline: "Cache-Aside E-Commerce & ACID Transaction Engine",
    concept: "Combines in-memory Redis caching with atomic MongoDB multi-document transactions to sustain high concurrency without inventory overselling.",
    diagram: [
      { from: "Inbound Client Request", to: "Security & JWT Rotation Gateway", tech: "Express + HTTP-only Cookie" },
      { from: "Security & JWT Rotation Gateway", to: "Redis Cache-Aside Layer", tech: "Redis In-Memory TTL" },
      { from: "Redis Cache (Miss)", to: "ESR Compound Indexed DB", tech: "MongoDB Index Engine" },
      { from: "Checkout Mutation", to: "Multi-Doc ACID Transaction", tech: "MongoDB Session Commits" }
    ],
    technicalHighlights: [
      "Strict MongoDB ESR Indexing: { category: 1, price: 1, stock: 1 }",
      "Zero-overselling ACID Inventory Deductions",
      "Resilient Redis Fallback on Cache Cold-Starts or Network Hiccups",
      "Session Family Tracking & Fraud Reuse Invalidation"
    ]
  },
  {
    id: "civiscan",
    name: "CiviScan",
    badge: "AI & Civic Platform",
    headline: "Gemini Vision Multi-Modal Civic Triage Engine",
    concept: "Streams citizen infrastructure hazard reports through Gemini Vision AI to classify severity, calculate priority, and broadcast real-time municipal alerts.",
    diagram: [
      { from: "Citizen Report (Photo/Audio)", to: "Multi-Modal Ingestion API", tech: "Next.js + Cloudinary" },
      { from: "Multi-Modal Ingestion API", to: "Gemini Vision Inference Engine", tech: "Google Gemini Vision" },
      { from: "Gemini Vision Inference Engine", to: "Rule-Based Priority & Deduplication", tech: "Heuristic Spatial Engine" },
      { from: "Priority Engine", to: "Real-Time Municipal Dispatch", tech: "Socket.IO + Leaflet Heatmap" }
    ],
    technicalHighlights: [
      "Automated Visual Hazard Classification & Department Routing",
      "Heuristic Spatial Deduplication within Geographic Radius",
      "Real-time Municipal Dashboards via WebSocket Streams",
      "AWS Cloud Deployment (EC2 + Amplify + Atlas)"
    ]
  }
];
