const express = require('express');
const path = require('path');
const { add, subtract, multiply, sqrt, factorial } = require('./math');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

function parseNums(req, res, fields) {
  const values = {};
  for (const field of fields) {
    const val = parseFloat(req.body[field]);
    if (isNaN(val)) {
      res.status(400).json({ error: `Invalid value for '${field}'` });
      return null;
    }
    values[field] = val;
  }
  return values;
}

app.post('/api/add', (req, res) => {
  const p = parseNums(req, res, ['a', 'b']);
  if (!p) return;
  res.json({ result: add(p.a, p.b) });
});

app.post('/api/subtract', (req, res) => {
  const p = parseNums(req, res, ['a', 'b']);
  if (!p) return;
  res.json({ result: subtract(p.a, p.b) });
});

app.post('/api/multiply', (req, res) => {
  const p = parseNums(req, res, ['a', 'b']);
  if (!p) return;
  res.json({ result: multiply(p.a, p.b) });
});

app.post('/api/divide', (req, res) => {
  const p = parseNums(req, res, ['a', 'b']);
  if (!p) return;
  if (p.b === 0) return res.status(400).json({ error: 'Division by zero' });
  res.json({ result: p.a / p.b });
});

app.post('/api/power', (req, res) => {
  const p = parseNums(req, res, ['a', 'b']);
  if (!p) return;
  res.json({ result: Math.pow(p.a, p.b) });
});

app.post('/api/modulo', (req, res) => {
  const p = parseNums(req, res, ['a', 'b']);
  if (!p) return;
  if (p.b === 0) return res.status(400).json({ error: 'Modulo by zero' });
  res.json({ result: p.a % p.b });
});

app.post('/api/sqrt', (req, res) => {
  const p = parseNums(req, res, ['a']);
  if (!p) return;
  if (p.a < 0) return res.status(400).json({ error: 'Cannot take sqrt of negative number' });
  res.json({ result: sqrt(p.a) });
});

app.post('/api/factorial', (req, res) => {
  const val = parseFloat(req.body.a);
  if (isNaN(val)) return res.status(400).json({ error: "Invalid value for 'a'" });
  try {
    res.json({ result: factorial(val) });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`Math demo server running at http://localhost:${PORT}`);
});
