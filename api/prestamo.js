const Prestamo = require('../models/prestamo');

module.exports = {
    crear: async (req, res) => {
        const { fecha, usuario, libros } = req.body;
        let prestamo = {};
        prestamo.fecha = fecha;
        prestamo.usuario = usuario;
        prestamo.libros = libros;
        let prestamoModel = new Prestamo(prestamo);
        prestamoModel.save((err, personaDB) => {
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se pudo registrar el préstamo',
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
        const prestamo = await Prestamo.find().populate('usuario');
        return res.send(prestamo)
    },
}