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

    verTodos: async (req, res) => {
        const user = await Genero.find()
        return res.send(user)
    },
}