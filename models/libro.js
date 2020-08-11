var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LibroModel = new Schema(
  {
    title: {type: String, required: true},
    autor: {type: Schema.Types.ObjectId, ref: 'Autor', required: true},
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    //genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}]
  }
);

// Virtual for book's URL
LibroModel
.virtual('url')
.get(function () {
  return '/catalog/book/' + this._id;
});

//Export model
module.exports = mongoose.model('Libro', LibroModel);