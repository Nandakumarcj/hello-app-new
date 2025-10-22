# Build Journal

## 2025-10-17
- Bootstrapped Hello App starter with GitHub memory structure.
## [DATE] - Added backend input validation
- Implemented name validation in server.js.
- Updated frontend (index.html) to show validation errors.
- Tested locally; working as expected.
## 2025-10-22 - Added timestamp to greeting and fixed timestamp bug
- Implemented backend `time` (ISO) and `timeFriendly` (human) fields in `/api/hello`.
- Updated frontend to display `timeFriendly` and keep last 3 greetings client-side.
- Fixed earlier `undefined` timestamp by aligning field names between backend and frontend.
- Tested locally: validation, timestamp, and client-side history working as expected.
