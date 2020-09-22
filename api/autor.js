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

    verTodos: async (req, res) => {
        const user = await Autor.find()
        return res.send(user)
    },
}