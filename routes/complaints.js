const express = require('express');
const path = require('path');
const router = express.Router();
const { writeToItemsCollection } = require('../controllers/complaintsController.js');


router.post('/submit', async (req, res) => {
    const { category, message, timestamp } = req.body;
    console.log(`Category: ${category}, Message: ${message}, Timestamp: ${timestamp}`);

    try {
        const result = await writeToItemsCollection({ category, message, timestamp });
        console.log('Write result:', result);
    } catch (err) {
        console.error('Error writing to items collection:', err);
        return res.status(500).send('Internal Server Error');
    }
    res.sendFile(path.join(__dirname, '../public/thankyou.html'));
});

module.exports = router;
