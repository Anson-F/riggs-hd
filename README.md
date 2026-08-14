# Riggs HD

An independent, static-export-ready rebuild of the Riggs HD / Destined To Be Great website.

## Design philosophy

**Layered Dossier: Locker Room → Lecture Hall.** Basketball earns attention; the advising file reveals the larger mission. The interface combines gym photography, court-line geometry, warm manila surfaces, taped field evidence, and direct athletic typography. It avoids generic nonprofit card grids and keeps every program status explicit.

## Routes

- `/` — Mission, featured programs, impact, founder, and calls to action
- `/about/` — Founder story and values
- `/programs/` — Basketball, pre-college, career exploration, and speaking
- `/impact/` — Reported milestone, gallery, and program reel
- `/events/` — Confirmed status and past program archive
- `/get-involved/` — Giving, partnerships, speaking, mentoring, and volunteering
- `/donate/` — Giving context and secure external donation route
- `/contact/` — Direct contact and mail-app form

## Development

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run typecheck
npm run lint
npm run build
```

The production build exports to `out/` and injects the approved direction contract as the first child of every `<body>`.

## Content notes

- The `30+` impact number is retained from the current public Wix site, with the reporting period marked as pending confirmation.
- 2024–25 and Summer 2025 activities are labeled as past programs.
- Donation and inquiry actions use the currently working external destinations documented in `RESEARCH.md`.
- The contact form intentionally opens the visitor’s mail app; it does not imply a backend that does not exist.
