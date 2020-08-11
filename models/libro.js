var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LibroModel = new Schema(
  {
    titulo: {type: String, required: true},
    autor: {type: Schema.Types.ObjectId, ref: 'Autor', required: true},
    editor: {type: String, required: true},
    editorial: {type: String, required: true},
    genero: [{type: Schema.Types.ObjectId, ref: 'Genre'}],
    calificacion: {type: Number},
  }
);

// Virtual for book's URL
// LibroModel
// .virtual('url')
// .get(function () {
//   return '/catalog/book/' + this._id;
// });

//Export model
module.exports = mongoose.model('Libro', LibroModel);