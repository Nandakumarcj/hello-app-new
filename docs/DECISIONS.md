# Decisions Log

| Date | ID | Decision | Context | Alternatives | Consequences |
|---|---|---|---|---|---|
| 2025-10-17 | D-0001 | Use Node + Express | Easiest for a tiny API | Python/Flask; Deno | Familiar, quick start |
| 2025-10-17 | D-0002 | No database | Keep it minimal | Add DB | Fewer moving parts |
| 2025-10-22 | D-0003 | Add timestamp to responses; keep client-side last-3 history | Show time with greeting and lightweight history on client | Persist server-side later if required | Simple UX improvement, no DB required |
