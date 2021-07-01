const { Router } = require('express');
const router = Router();

const {
    renderNotesForm,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote,

} = require('../controllers/notes.controller')

const { isAutenticated } = require('../helpers/auth');

// New note
router.get('/notes/add', isAutenticated, renderNotesForm);
router.post('/notes/new-note', isAutenticated, createNewNote);

// Get all notes
router.get('/notes', isAutenticated, renderNotes, (req, res) => {
    console.log('********* ' + req.body);
});

// Edit notes
router.get('/notes/edit/:id', isAutenticated, renderEditForm);
router.put('/notes/edit/:id', isAutenticated, updateNote)

// Delete notes

router.delete('/notes/delete/:id', isAutenticated, deleteNote);

module.exports = router;