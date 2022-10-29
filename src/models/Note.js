const {Schema, model} = require('mongoose');

const NoteSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{//descripcion de atributos como tipo y requerido
        type: String,
        required: true
    },
    
    timestamps: true,
    
});

module.exports =model('Note',NoteSchema);