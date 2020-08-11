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
        await userModel.save();
        res.json(userModel);
    },

    buscar: async (req, res) => {
        const user = await Usuario.find()
        return res.send(user)
    },
}