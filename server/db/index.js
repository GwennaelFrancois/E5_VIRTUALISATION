const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://note_user:lKtEe2hL2NiONPJa@cluster0.vkanv.mongodb.net/notes?retryWrites=true&w=majority';

mongoose.connect(connectionString, {useNewUrlParser: true}).catch((e) => {
    console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db