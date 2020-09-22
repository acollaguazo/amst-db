var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AutorModel = new Schema(
    {
        nombre: {
            type: String, 
            required: true, 
            maxlength: 100
        },
        apellido: {
            type: String, 
            required: true, 
            maxlength: 100
        },
        edad: {
            type: Number,
            required: false
        }
    }
);

module.exports = mongoose.model('Autor', AutorModel);
