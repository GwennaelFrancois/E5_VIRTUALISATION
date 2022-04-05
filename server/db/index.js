const mongoose = require('mongoose');

const connectionString = 'localhost:27017/note';

mongoose.connect(connectionString, {useNewUrlParser: true}).catch((e) => {
    console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db