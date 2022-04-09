const express = require('express');
const note_controller = require('../controllers/noteConttroller.js');
const router = express.Router();

router.get('/note', note_controller.getNotes);
router.post('/note', note_controller.postNote);
// Non implemente
//router.get('/note/:id&:', note_controller.getNoteById);
//router.put('/note/:id', note_controller.putNoteById);
//router.delete('/note/:id', note_controller.deleteNoteById);

module.exports = router;