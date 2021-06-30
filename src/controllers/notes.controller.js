const Note = require('../models/notes');

const notesController = {};


// New note
notesController.renderNotesForm = (req, res) => {
    res.render('notes/new-note');
}

notesController.createNewNote = async (req, res) => {
    const {title, description} = req.body;
    const newNote = new Note({title, description});
    await newNote.save();
    res.send('New note')
}

// Get all notes
notesController.renderNotes = async (req, res) => {
   const notes = await Note.find().lean();
   console.log(notes);
   res.render('notes/all-notes', {notes})
}

// Edit notes
notesController.renderEditForm = (req, res) => {
    res.send('Render edit form, id' + req.params.id);
}

notesController.editNote = (req, res) => {
    res.send('Edit note');
}

// Delete notes
notesController.deleteNote = (req, res) => {
    res.send('Delete note');
}


module.exports = notesController;



