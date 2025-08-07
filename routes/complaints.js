const express = require('express');
const path = require('path');
const router = express.Router();

router.post('/submit', (req, res) => {
    const { category, message, timestamp } = req.body;
    console.log(`Category: ${category}, Message: ${message}, Timestamp: ${timestamp}`);
    res.sendFile(path.join(__dirname, '../public/thankyou.html'));
});

module.exports = router;
