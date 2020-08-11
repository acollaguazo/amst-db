const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsuarioModel = new Schema(
    {
// const usuario = new mongoose.Schema({
        cedula: {
            index: true,
            unique: true,
            type: String, 
            required: true,
            maxlength: 10
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
            index: true,
            unique: true,
            type: String, 
            maxlength: 50
        }
    }
);
// module.exports = mongoose.model('Usuario', UsuarioModel, 'personas');
// module.exports = User = mongoose.model('usuario', user);
module.exports = mongoose.model('Usuario', UsuarioModel);