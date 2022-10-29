const {Router} = require('express');
const router = Router();

const {renderNoteForm, createNewNote, renderNotes, renderEditForm,update, deleteNotes } = require('../controllers/notes.controller');
//const { render } = require('../server');

//despliega formulario de notas
router.get('/notes/add',renderNoteForm);
//post de notas
router.post('notes/add', createNewNote);
//muestra notas
router.get('/notes', renderNotes);

router.get('/notes/edit', renderEditForm);

router.put('/notes/edit', update);

router.delete('/notes/delete',deleteNotes);

module.exports = router;