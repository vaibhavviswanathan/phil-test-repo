const express = require("express");
const path = require("path");
const { add, subtract, multiply, sqrt, factorial } = require("./math");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/add", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  res.json({ result: add(a, b) });
});

app.get("/api/subtract", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  res.json({ result: subtract(a, b) });
});

app.get("/api/multiply", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  res.json({ result: multiply(a, b) });
});

app.get("/api/divide", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (b === 0) return res.status(400).json({ error: "Division by zero" });
  res.json({ result: a / b });
});

app.get("/api/power", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  res.json({ result: Math.pow(a, b) });
});

app.get("/api/modulo", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (b === 0) return res.status(400).json({ error: "Modulo by zero" });
  res.json({ result: a % b });
});

app.get("/api/sqrt", (req, res) => {
  const x = parseFloat(req.query.x);
  if (x < 0) return res.status(400).json({ error: "Cannot take sqrt of negative number" });
  res.json({ result: sqrt(x) });
});

app.get("/api/factorial", (req, res) => {
  const n = parseInt(req.query.n, 10);
  try {
    res.json({ result: factorial(n) });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
