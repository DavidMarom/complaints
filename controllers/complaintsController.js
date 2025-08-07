const { MongoClient } = require('mongodb');
const path = require('path');

async function writeToItemsCollection(data) {
    const uri = process.env.MONGO_CONNECTION_STRING;
    console.log('===================================='); // Debugging line to check the data being written
    console.log('MongoDB URI:', uri); // Debugging line to check the URI

    if (!uri) {
        throw new Error('MONGO_CONNECTION_STRING environment variable is not set.');
    }
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('main_db');
        const collection = db.collection('items');
        const result = await collection.insertOne(data);
        return result;
    } catch (err) {
        console.error('Error writing to items collection:', err);
        throw err;
    } finally {
        await client.close();
    }
}

module.exports = { writeToItemsCollection };
