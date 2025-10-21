const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the frontend
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Simple API: /api/hello?name=World
app.get('/api/hello', (req, res) => {
  const name = (req.query.name || 'World').toString().trim();
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  res.json({ message: `Hello, ${name}!` });
});

app.listen(PORT, () => {
  console.log(`Hello App listening on http://localhost:${PORT}`);
});
