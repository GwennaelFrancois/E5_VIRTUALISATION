// Testin purposes : to be deleted
const notesList = [
    {titre: 'Premier', value: 'Première note'},
    {titre: 'Deux', value: 'Deuxième note'},
    {titre: 'Troix', value: 'Troisième note'},
];

const Note = require('../models/note-model');

getNotes = async (req, res) => {
    await Note.find({}, (err, notes) => {
        if (err) {
            return res.status(400).json({success: false, error: err});
        }
        if (!notes.length) {
            return res.status(400).json({success: false, error: 'No note found'});
        }
        return res.status(200).json({success: true, data: notes});
    }).clone().catch(function(err){ console.log(err) });
}

postNote = async (req, res) => {
    const body = req.body; 
    if (!body) {
        return res.status(400).json({success: false, error: 'No request body'});
    }

    const note = new Note(body);
    if (!note) {
        return res.status(400).json({success: false, error: 'Error creating note'});
    }

    note.save().then(() => {
        return res.status(201).json({
            success: true,
            message: 'Note created'
        })
    }).catch(error => {
        return res.status(400).json({
            success: false,
            message: 'Error while creating note'
        })
    });

}

getNoteById = async (req, res) => {
    res.json(notesList[req.params.id]);
}

putNoteById = async (req, res) => {
    res.status(200).send(`Note ${req.params.id} modified`);
}

deleteNoteById = async (req, res) => {
    res.status(200).send(`Note ${req.params.id} deleted`);
}

module.exports = {
    getNotes,
    postNote,
    getNoteById,
    putNoteById,
    deleteNoteById
};