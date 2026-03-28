const express = require('express');
const path = require('path');
const { add, subtract, multiply, divide, power, modulo, sqrt, factorial } = require('./math');

const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// API endpoints for math operations

// Addition
app.post('/api/add', (req, res) => {
  try {
    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
      return res.status(400).json({ error: 'Both a and b must be numbers' });
    }
    const result = add(a, b);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Subtraction
app.post('/api/subtract', (req, res) => {
  try {
    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
      return res.status(400).json({ error: 'Both a and b must be numbers' });
    }
    const result = subtract(a, b);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Multiplication
app.post('/api/multiply', (req, res) => {
  try {
    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
      return res.status(400).json({ error: 'Both a and b must be numbers' });
    }
    const result = multiply(a, b);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Division
app.post('/api/divide', (req, res) => {
  try {
    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
      return res.status(400).json({ error: 'Both a and b must be numbers' });
    }
    const result = divide(a, b);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Power
app.post('/api/power', (req, res) => {
  try {
    const { base, exponent } = req.body;
    if (typeof base !== 'number' || typeof exponent !== 'number') {
      return res.status(400).json({ error: 'Both base and exponent must be numbers' });
    }
    const result = power(base, exponent);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Modulo
app.post('/api/modulo', (req, res) => {
  try {
    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
      return res.status(400).json({ error: 'Both a and b must be numbers' });
    }
    const result = modulo(a, b);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Square root
app.post('/api/sqrt', (req, res) => {
  try {
    const { x } = req.body;
    if (typeof x !== 'number') {
      return res.status(400).json({ error: 'x must be a number' });
    }
    const result = sqrt(x);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Factorial
app.post('/api/factorial', (req, res) => {
  try {
    const { n } = req.body;
    if (typeof n !== 'number') {
      return res.status(400).json({ error: 'n must be a number' });
    }
    const result = factorial(n);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Math Web Interface server running at http://localhost:${PORT}`);
});

module.exports = app;