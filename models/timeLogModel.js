const connectDB = require('../config/db');

const getTimeLogCollection = async () => {
    const db = await connectDB();
    return db.collection('source_log');
};

module.exports = { getTimeLogCollection };
