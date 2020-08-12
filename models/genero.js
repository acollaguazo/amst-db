var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GeneroModel = new Schema(
    {
        nombre: {
            type: String, 
            required: true
        }
    }
);

module.exports = mongoose.model('Genero', GeneroModel);