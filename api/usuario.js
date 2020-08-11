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
        // await userModel.save();
        // res.json(userModel);
        userModel.save((err, personaDB) => {
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se pudo registrar la persona, ocurrió el siguiente error:',
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

    buscar: async (req, res) => {
        const user = await Usuario.find()
        return res.send(user)
    },
}