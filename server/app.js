const express = require('express');
const cors = require('cors');

const db = require('./db');
const noteRouter = require("./routes/note");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.on('error', console.error.bind(console, 'MongoDB connection error : '));

app.use('/', noteRouter);

app.listen(5000, () => console.log('Server running on port 5000'));