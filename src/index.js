const express = require('express');
const { add, subtract, multiply, sqrt, factorial } = require('./math');
const path = require('path');

const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Math operation routes
app.post('/api/add', (req, res) => {
  try {
    const { a, b } = req.body;
    const result = add(Number(a), Number(b));
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/subtract', (req, res) => {
  try {
    const { a, b } = req.body;
    const result = subtract(Number(a), Number(b));
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/multiply', (req, res) => {
  try {
    const { a, b } = req.body;
    const result = multiply(Number(a), Number(b));
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/divide', (req, res) => {
  try {
    const { a, b } = req.body;
    if (Number(b) === 0) {
      throw new Error('Division by zero is not allowed');
    }
    const result = Number(a) / Number(b);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/power', (req, res) => {
  try {
    const { a, b } = req.body;
    const result = Math.pow(Number(a), Number(b));
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/modulo', (req, res) => {
  try {
    const { a, b } = req.body;
    if (Number(b) === 0) {
      throw new Error('Modulo by zero is not allowed');
    }
    const result = Number(a) % Number(b);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/sqrt', (req, res) => {
  try {
    const { x } = req.body;
    if (Number(x) < 0) {
      throw new Error('Square root of negative number is not allowed');
    }
    const result = sqrt(Number(x));
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/factorial', (req, res) => {
  try {
    const { n } = req.body;
    const result = factorial(Number(n));
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});