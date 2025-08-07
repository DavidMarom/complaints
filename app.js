const express = require('express')
const path = require('path')
const app = express()
const complaintsRouter = require('./routes/complaints')

const port = 3000

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // Add this middleware before your route
app.use(express.json());
app.use('/', complaintsRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
