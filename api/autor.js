const Autor = require('../models/autor');

module.exports = {
    crear: async (req, res) => {
        const { nombre, apellido, edad } = req.body;
        let user = {};
        user.nombre = nombre;
        user.apellido = apellido;
        user.edad = edad;
        let userModel = new Autor(user);
        userModel.save((err, personaDB) => {
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se pudo registrar el autor',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    msj: 'Los datos se enviaron de forma exitosa',
                    personaDB
                });
            }
        });
    },

    verTodos: async (res) => {
        const user = await Autor.find()
        return res.send(user)
    },

    buscarPorId: async (req, res) => {
        let _id = req.params._id;
        Autor.find({_id: _id}, function(err, info) {
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se encontró al autor solicitado',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    autor: info
                });
            }
        });
    },

    modificar: async (req, res) => {        
        let _id = req.params.id;
        let body = req.body;
        Autor.updateOne({ _id: _id }, {
                $set: body
            },
            function(error, info) {
                if (error) {
                    res.json({
                        resultado: false,
                        msg: 'No se pudo modificar el autor',
                        err
                    });
                } else {
                    res.json({
                        resultado: true,
                        msg: 'Autor modificado correctamente',
                        autor: info
                    })
                }
            }
        )
    },

    eliminar: async (req, res) => {
        let _id = req.params.id;
        Autor.deleteOne({_id: _id}, function(err, info) {
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se pudo eliminar el autor',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    msj: 'El autor se eliminó correctamente',
                    autor: info
                });
            }
        });
    }
}