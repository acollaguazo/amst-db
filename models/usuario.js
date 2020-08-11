const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsuarioModel = new Schema(
    {
// const usuario = new mongoose.Schema({
        cedula: {
            type: String, 
            required: true,
            maxlength: 10, 
            unique: true
        },
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
        correo: {
            type: String, 
            maxlength: 50
        }
    }
);

// module.exports = User = mongoose.model('usuario', user);
module.exports = mongoose.model('Usuario', UsuarioModel);