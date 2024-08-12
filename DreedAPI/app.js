const express = require('express');
const app = express();
const port = 3005;

// Middleware to parse JSON bodies
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/api/users', (req, res) => {
    res.json([{ id: 1, name: 'Aneri' }]);
});

// Example POST API route without using request body
app.post('/api/users', (req, res) => {
    const newUser = req.body; // This should take data from the request body
    res.status(201).json({
        message: 'User created successfully',
        user: newUser // This should return the newUser object from the request body
    });
});

// Start the server
app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});
