# Project Summary (Single Page)

**Name:** Hello App  
**Goal:** A tiny web app where a user types their name and gets a friendly greeting.

**Users & jobs-to-be-done:**  
- Type your name → See "Hello, <name>!"

**Non-goals:**  
- No database, no auth, no persistence.

**Current scope (MVP):**  
- One HTML page with a form  
- One API endpoint: `GET /api/hello?name=...`  
- Validation for empty/invalid names  
- Timestamp returned by the backend and shown on the frontend (client-side history)

**Tech stack:**  
- Frontend: HTML + vanilla JS (fetch)  
- Backend: Node.js + Express  
- Infra: run locally with `npm start`

**Recent updates:**  
- 2025-10-22 — Added backend input validation & frontend error display.  
- 2025-10-22 — Added timestamp to greeting and client-side last-3 greetings display.

**Links:**  
- Decisions: ./DECISIONS.md  
- TODO: ./TODO.md  
- Journal: ./JOURNAL.md
