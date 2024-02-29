const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

/*
// Middleware to set Content Security Policy (CSP)
app.use((req, res, next) => {
    // Adjust the CSP headers based on your requirements
    res.setHeader('Content-Security-Policy', 'frame-ancestors *; worker-src https://dexscreener.com;');
    next();
});
*/

// Define a route handler for the root path
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
