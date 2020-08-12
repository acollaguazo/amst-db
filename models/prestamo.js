'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PrestamoModel = new Schema(
    {
        fecha: {
            type: String, 
            required: true, 
            default: Date.now 
        },
        usuario: {
            type: Schema.Types.ObjectId, 
            ref: 'Usuario', 
            required: true
        },
        libros: [
            {
                type: Schema.Types.ObjectId, 
                ref: 'Libro', 
                required: true,
                autopopulate: true
            }
        ]
    }
);

module.exports = mongoose.model('Prestamo', PrestamoModel);
Schema.plugin(require('mongoose-autopopulate'));