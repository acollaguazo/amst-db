var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PrestamoModel = new Schema(
    {
        fecha: {type: String, required: true},
        id_usuario: {type: Schema.Types.ObjectId, ref: 'Usuario', required: true},
        libros: [{type: Schema.Types.ObjectId, ref: 'Libro', required: true}]
    }
);

// Virtual for book's URL
// LibroModel
// .virtual('url')
// .get(function () {
//   return '/catalog/book/' + this._id;
// });

module.exports = mongoose.model('Prestamo', PrestamoModel);