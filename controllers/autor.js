const Autor = require('../models/autor');

module.exports = {
  crear: async (req, res) => {
    const { nombre, apellido, edad } = req.body;
    let user = {};
    user.nombre = nombre;
    user.apellido = apellido;
    user.edad = edad;
    let userModel = new Autor(user);
    userModel.save((err, info) => {
      err ? res.json({msj: 'No se pudo registrar el autor', err })
          : res.json({msj: 'El autor se creó correctamente', info });
    });
  },

  verTodos: async (req, res) => {
    const user = await Autor.find()
    return res.send(user)
  },

  buscarPorId: async (req, res) => {
    let _id = req.params.id;
    Autor.findById({_id: _id}, function(err, info) {
      err ? res.json({ msj: 'No se encontró al autor', err }) 
          : res.json( info );
    });
  },

  modificar: async (req, res) => {        
    let _id = req.params.id;
    let body = req.body;
    Autor.updateOne({_id: _id }, { $set: body }, function(err, info) {
      err ? res.json({ msg: 'No se pudo modificar el autor', err })
          : res.json({ msg: 'Autor modificado correctamente'})
    })
  },

  eliminar: async (req, res) => {
    Autor.findByIdAndRemove(req.params.id, function(err) {
      err ? res.json({ msj: 'No se pudo eliminar el autor', err }) 
          : res.json({ msj: 'El autor se eliminó correctamente' });
    });
  }
}