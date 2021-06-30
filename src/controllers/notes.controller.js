const notesController = {};


// New note
notesController.renderNotesForm = (req, res) => {
    res.send('Note add');
}

notesController.createNewNote = (req, res) => {
    res.send('New note');
}

// Get all notes
notesController.renderNotes = (req, res) => {
    res.send('Render all notes');
}

// Edit notes
notesController.renderEditForm = (req, res) => {
    res.send('Render edit form');
}

notesController.editNote = (req, res) => {
    res.send('Edit note');
}

// Delete notes
notesController.deleteNote = (req, res) => {
    res.send('Delete note');
}


module.exports = notesController;



