// Import Express
const express = require('express');
const app = express();

// Define a port
const PORT = 3000;

// Serve a homepage
app.get('/', (req, res) => {
  res.send('<h1>Hello, Node.js World! 🚀</h1>');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
