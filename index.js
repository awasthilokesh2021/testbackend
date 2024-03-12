require('dotenv').config();
const express = require('express');

// Create an Express application
const app = express();

// Define a route that handles GET requests to the root URL '/'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
