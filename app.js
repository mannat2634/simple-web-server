const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Route to add two numbers
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const sum = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});





// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Sample endpoint
app.get('/endpoint', (req, res) => {
    res.send('Hello, this is a sample endpoint!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${3000}`);

    
});


