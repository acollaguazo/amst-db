var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LibroModel = new Schema({
        titulo: {
            type: String, 
            required: true
        },
        editor: {
            type: String, 
            required: true
        },
        editorial: {
            type: String, 
            required: true
        },
        calificacion: {
            type: Number,
            required: false
        },
        genero: {
            type: Schema.Types.ObjectId, 
            ref: 'Genero', 
            required: false
        },        
        autor: {
            type: Schema.Types.ObjectId, 
            ref: 'Autor', 
            required: false
        }
    }
);

module.exports = mongoose.model('Libro', LibroModel);