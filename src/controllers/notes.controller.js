const Note = require('../models/notes');

const notesController = {};


// New note
notesController.renderNotesForm = (req, res) => {
    res.render('notes/new-note');
}

notesController.createNewNote = async (req, res) => {
    const { title, description } = req.body;
    const newNote = new Note({ title, description });
    newNote.user = req.user._id;
    console.log(newNote);
    await newNote.save()
    .then(data => {
        req.flash('success_msg', 'Note added succesfully');
        res.redirect('/notes');
    })
    .catch(err => {
        console.log(err);
        req.flash('error_msg', 'There was an error, please try again.');
        res.redirect('/notes');
    });
}

// Get all notes
notesController.renderNotes = async (req, res, next) => {
    const notes = await Note.find({user: req.user._id}).lean();
    res.render('notes/all-notes', { notes });
    next();
}

// Edit notes
notesController.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id).lean();
    res.render('notes/edit-notes', { note });
}

notesController.updateNote = async (req, res) => {
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, description });
    req.flash('success_msg', 'Note updated succesfully');
    res.redirect('/notes');
}

// Delete notes
notesController.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Note deleted succesfully');
    res.redirect('/notes');
}


module.exports = notesController;



