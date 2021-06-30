const notes = require('../models/notes');
const Note = require('../models/notes');

const notesController = {};


// New note
notesController.renderNotesForm = (req, res) => {
    res.render('notes/new-note');
}

notesController.createNewNote = async (req, res) => {
    const { title, description } = req.body;
    const newNote = new Note({ title, description });
    await newNote.save();
    res.redirect('/notes');
}

// Get all notes
notesController.renderNotes = async (req, res) => {
    const notes = await Note.find().lean();
    console.log(notes);
    res.render('notes/all-notes', { notes })
}

// Edit notes
notesController.renderEditForm = async (req, res) => {
    const note = await notes.findById(req.params.id).lean();
    res.render('notes/edit-notes', { note });
}

notesController.updateNote = async (req, res) => {
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, description });
    res.redirect('/notes');
}

// Delete notes
notesController.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.redirect('/notes');
}


module.exports = notesController;



