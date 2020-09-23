const Genero = require('../models/genero');

module.exports = {
    crear: async (req, res) => {
        const { nombre } = req.body;
        let user = {};
        user.nombre = nombre;
        let userModel = new Genero(user);
        userModel.save((err, personaDB) => {
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se pudo registrar el género',
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
        const user = await Genero.find()
        return res.send(user)
    },

    buscarPorId: async (req, res) => {
        let _id = req.params._id;
        Genero.find({_id: _id}, function(err, info) {
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se encontró el género solicitado',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    genero: info
                });
            }
        });
    },

    modificar: async (req, res) => {        
        let _id = req.params.id;
        let body = req.body;
        Genero.updateOne({ _id: _id }, {
                $set: body
            },
            function(error, info) {
                if (error) {
                    res.json({
                        resultado: false,
                        msg: 'No se pudo modificar el género',
                        err
                    });
                } else {
                    res.json({
                        resultado: true,
                        msg: 'Género modificado correctamente',
                        genero: info
                    })
                }
            }
        )
    },

    eliminar: async (req, res) => {
        let _id = req.params.id;
        Genero.deleteOne({_id: _id}, function(err, info) {
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se pudo eliminar el género',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    msj: 'El género se eliminó correctamente',
                    genero: info
                });
            }
        });
    }
}