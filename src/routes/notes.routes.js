const { Router } = require('express');
const router = Router();

const {
     renderNotesForm, 
     createNewNote, 
     renderNotes, 
     renderEditForm, 
     deleteNote 
    } = require('../controllers/notes.controller')

// New note
router.get('/notes/add', renderNotesForm);
router.post('/notes/add', createNewNote);

// Get all notes
router.get('/notes', renderNotes);

// Edit notes
router.get('/notes/edit/:id', renderEditForm);
router.put('/notes/edit/:id',)

// Delete notes

router.delete('/notes/delete/:id', deleteNote)

module.exports = router;