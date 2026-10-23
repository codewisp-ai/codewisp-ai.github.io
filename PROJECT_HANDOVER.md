# Portfolio Project Handover & Documentation

## Overview
This repository contains a responsive, high-performance portfolio frontend for **Anmol Maheshwari**, built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**.

The application is specifically engineered to highlight:
- **Backend Architecture & Distributed Systems**: Redis Cache-Aside, Redis Streams consumer groups, non-blocking ZSET delay queues, dead letter queues (DLQ), XAUTOCLAIM crash recovery, atomic Redis Lua HTB rate limiting.
- **Microservices & Database Rigor**: Layered Service-Repository pattern, MongoDB multi-document ACID transactions preventing race conditions, compound ESR indexing (`{ category: 1, price: 1, stock: 1 }`), refresh token rotation with session family fraud detection.
- **AI Integrations**: 
  - **SystemSketch**: Collaborative AI-powered system design & microservice topology synthesizer (3rd Place System Collapse Hackathon).
  - **CatalogForge**: E-commerce & analytics backend engine with Redis caching.
  - **CiviScan**: Multi-modal Gemini Vision civic issue reporting with real-time Socket.IO alerts and Leaflet geospatial heatmaps.
  - **VortexMQ**: High-throughput event-driven notification engine.
  - **SignalRank AI**: 3-stage hybrid ranking pipeline (FAISS vector search + cross-encoder + LLM CoT).
- **Career Highlights**:
  - Full Stack Developer (AI-Focused) Intern @ Bilvaleaf Private Limited (HRMS R&D, Policy Chatbot RAG).
  - B.Tech in Computer Engineering @ AMU (3rd Year, 9.8 / 10 CGPA).
  - 3x Hackathon Placements (System Collapse 3rd, Garage Inference 2nd, GDGC 1st).
  - 200+ LeetCode DSA solved in C++.

---

## Directory Structure
- `src/components/`:
  - `Navbar.tsx`: Responsive top navbar with glassmorphism, mobile menu drawer, and active section tracking.
  - `Hero.tsx`: Headline, quick metrics badges, visual system blueprint card, and CTAs.
  - `ArchitectureExplorer.tsx`: Interactive architecture blueprint viewer with step-by-step request flow simulation for SystemSketch, CatalogForge, CiviScan, VortexMQ, SignalRank AI, and AegisGate.
  - `ProjectsSection.tsx`: Filterable project grid (`All`, `AI Integrations`, `Microservices & DB`, `Distributed & Queues`).
  - `ProjectModal.tsx`: Technical inspection modal with system design specs, SLA benchmarks, and GitHub repository links.
  - `ExperienceSection.tsx`: Career and hackathon timeline.
  - `SkillsSection.tsx`: Categorized skill matrices.
  - `LiveTelemetryConsole.tsx`: Interactive real-time log simulator for cache hits, Gemini Vision inference, and traffic spike injection.
  - `ContactSection.tsx`: Contact form, one-click copy email button, and platform profiles.
  - `Footer.tsx`: Modern footer with back-to-top button.
  - `Icons.tsx`: Reusable SVG icons for GitHub, LinkedIn, and brand symbols.
- `src/data/portfolioData.ts`: Central source of truth for all projects, experiences, and metrics.
- `src/types/index.ts`: TypeScript interfaces for all data structures.

---

## Quick Start
To run the project:
```bash
npm install
npm run dev
```

To build for production:
```bash
npm run build
```
