const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;
let db;

const connectDB = async () => {
    if (db) return db;

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        await client.connect();
        db = client.db(process.env.DB_NAME);
        console.log('Connected to MongoDB');
        return db;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to connect to MongoDB');
    }
};

module.exports = connectDB;
