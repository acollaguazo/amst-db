const mongoose = require('mongoose');

const user = new mongoose.Schema({
  nombre: {type: String, required: true, maxlength: 100},
  apellido: {type: String, required: true, maxlength: 100},
});

module.exports = User = mongoose.model('usuario', user);