// src/backend/server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the frontend (static files)
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Helper: simple validation & sanitization
function validateName(raw) {
  if (raw === undefined || raw === null) return { ok: false, code: 400, error: 'Name is required' };

  const name = String(raw).trim();

  if (name.length === 0) return { ok: false, code: 400, error: 'Name is required' };

  // Limit length to avoid abuse
  if (name.length > 100) return { ok: false, code: 400, error: 'Name too long' };

  // Reject control characters (like newlines, tabs, non-printable)
  const controlCharRegex = /[\x00-\x1F\x7F]/;
  if (controlCharRegex.test(name)) return { ok: false, code: 400, error: 'Invalid name' };

  return { ok: true, name };
}

// GET /api/hello?name=...
app.get('/api/hello', (req, res) => {
  const rawName = req.query.name;
  const result = validateName(rawName);

  if (!result.ok) {
    return res.status(result.code).json({ error: result.error });
  }

  const safeName = result.name;

  // Provide ISO timestamp and a human-friendly formatted version
  const d = new Date();
  const timeISO = d.toISOString();
  const timeFriendly = d.toLocaleString();

  return res.json({
    message: `Hello, ${safeName}!`,
    time: timeISO,           // machine-readable
    timeFriendly: timeFriendly // human-readable
  });
});

// Health endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Hello App listening on http://localhost:${PORT}`);
});
