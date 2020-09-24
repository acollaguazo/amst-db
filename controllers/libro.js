const Libro = require('../models/libro');

module.exports = {
  crear: async (req, res) => {
    const { titulo, 
            editor, 
            editorial, 
            calificacion, 
            autor, genero 
          } = req.body;
    let libro = {};
    libro.titulo = titulo;
    libro.editor = editor;
    libro.editorial = editorial;
    libro.calificacion = calificacion;
    libro.autor = autor;
    libro.genero = genero;
    let libroModel = new Libro(libro);
    libroModel.save((err, info) => {
      err ? res.json({msj: 'No se pudo registrar el libro', err }) 
          : res.json({msj: 'El libro se creó correctamente', info });
    });
  },

  verTodos: async (req, res) => {
    const libro = await Libro.find().populate("autor")
                                   .populate("genero");
    return res.send(libro)
  },

  buscarPorId: async (req, res) => {
    let _id = req.params.id;
    Libro.findById({_id: _id}, function(err, info) {
      err ? res.json({ msj: 'No se encontró el libro', err }) 
          : res.json( info );
    });
  },

  modificar: async (req, res) => {        
    let _id = req.params.id;
    let body = req.body;
    Libro.updateOne({ _id: _id }, { $set: body }, function(err) {
      err ? res.json({ msg: 'No se pudo modificar el libro', err }) 
          : res.json({ msg: 'Libro modificado correctamente' })
    })
  },

  eliminar: async (req, res) => {
    Libro.findByIdAndRemove(req.params.id, function(err) {
      err ? res.json({ msj: 'No se pudo eliminar el libro', err }) 
          : res.json({ msj: 'El libro se eliminó correctamente' });
    });
  }
}