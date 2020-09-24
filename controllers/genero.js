const Genero = require('../models/genero');

module.exports = {
  crear: async (req, res) => {
    const { nombre } = req.body;
    let genre = {};
    genre.nombre = nombre;
    let genreModel = new Genero(genre);
    genreModel.save((err, info) => {
      err ? res.json({msj: 'No se pudo registrar el género', err })
          : res.json({msj: 'El género se creó correctamente', info});
    });
  },

  verTodos: async (req, res) => {
    const genero = await Genero.find()
    return res.send(genero)
  },

  buscarPorId: async (req, res) => {
    let _id = req.params.id;
    Genero.findById({_id: _id}, function(err, info) {
      err ? res.json({msj: 'No se encontró el género', err })                   
          : res.json( info );                                             
    });
  },

  modificar: async (req, res) => {        
    let _id = req.params.id;
    let body = req.body;
    Genero.updateOne({ _id: _id }, { $set: body }, function(err) {
      err ? res.json({ msg: 'No se pudo modificar el género', err })
          : res.json({ msg: 'Género modificado correctamente' })
    });
  },

  eliminar: async (req, res) => {
    Genero.findByIdAndRemove(req.params.id, function(err) {
      err ? res.json({ msj: 'No se pudo eliminar el género', err })
          : res.json({ msj: 'El género se eliminó correctamente' });
    });
  }
}
