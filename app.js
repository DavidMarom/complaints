const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true })); // Add this middleware before your route
app.use(express.json());

// Route to receive the POST
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    console.log('Received:', name, email);
    res.send(`Thank you, ${name}! We received your email: ${email}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
