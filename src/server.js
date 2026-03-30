const express = require('express');
const path = require('path');
const { add, subtract, multiply, sqrt, factorial } = require('./math');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.post('/api/add', (req, res) => {
  const { a, b } = req.body;
  try {
    res.json({ result: add(Number(a), Number(b)) });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post('/api/subtract', (req, res) => {
  const { a, b } = req.body;
  try {
    res.json({ result: subtract(Number(a), Number(b)) });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post('/api/multiply', (req, res) => {
  const { a, b } = req.body;
  try {
    res.json({ result: multiply(Number(a), Number(b)) });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post('/api/sqrt', (req, res) => {
  const { x } = req.body;
  try {
    res.json({ result: sqrt(Number(x)) });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post('/api/factorial', (req, res) => {
  const { n } = req.body;
  try {
    res.json({ result: factorial(Number(n)) });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
