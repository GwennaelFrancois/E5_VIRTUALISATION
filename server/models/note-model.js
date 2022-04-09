const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Note = new Schema(
    {
        titre: String,
        value: String
    }
);

module.exports = mongoose.model('notes', Note);