// Import Express
const express = require('express');
const app = express();

// Use the port from AWS (process.env.PORT) or default to 3000 for local
const PORT = process.env.PORT || 3000;

// Homepage route
app.get('/', (req, res) => {
  res.send('<h1>Hello, Node.js World! 🚀</h1>');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
