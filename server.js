const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve math.js file from src directory for client-side use
app.get('/math.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'math.js'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});