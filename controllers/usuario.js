const Usuario = require('../models/usuario');

module.exports = {
    crear: async (req, res) => {
        const { cedula, nombre, apellido, correo } = req.body;
        let user = {};
        user.cedula = cedula;
        user.nombre = nombre;
        user.apellido = apellido;
        user.correo = correo;
        let userModel = new Usuario(user);
        userModel.save((err, personaDB) => {
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se pudo registrar al usuario',
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

    verTodos: async (req, res) => {
        const user = await Usuario.find()
        return res.send(user)
    },

    buscarPorId: async (req, res) => {
        let cedula = req.params.cedula;
        Usuario.find({cedula: cedula}, function(err, usuario) {
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se encontró al usuario solicitado',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    usuario: usuario
                });
            }
        });
    },

    modificar: async (req, res) => {        
        let _id = req.params.id;
        let body = req.body;
        Usuario.updateOne({ _id: _id }, {
                $set: body
            },
            function(error, info) {
                if (error) {
                    res.json({
                        resultado: false,
                        msg: 'No se pudo modificar el usuario',
                        err
                    });
                } else {
                    res.json({
                        resultado: true,
                        msg: 'Usuario modificado correctamente',
                        info: info
                    })
                }
            }
        )
    },

    eliminar: async (req, res) => {
        let _id = req.params.id;
        Usuario.deleteOne({_id: _id}, function(err, usuario) {
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se pudo eliminar al usuario',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    msj: 'El usuario se eliminó correctamente',
                    usuario: usuario
                });
            }
        });
    },
}