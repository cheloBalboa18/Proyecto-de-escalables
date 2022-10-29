const notesCtrl = {};

notesCtrl.renderNoteForm =  (req,res) =>{// ruta para desplegar formulario
    res.send('notes add');
};

notesCtrl.createNewNote = (req,res) =>{//
    res.send('new note');
};

notesCtrl.renderNotes = (req,res) =>{
    //res.render('notes',{message:'holaaa'});
    res.send('notes');
};

notesCtrl.renderEditForm = (req,res) =>{
    res.send('render edit form');
};

notesCtrl.update = (req,res) =>{
    res.send('update');
};

notesCtrl.deleteNotes = (req,res) =>{
    res.send('delete notes');
};

module.exports = notesCtrl;