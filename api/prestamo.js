const Prestamo = require('../models/prestamo');
const Libro = require('../models/libro');

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

    verTodos: async (req, res) => {
        const prestamo = await Prestamo.find().populate({path: 'libros', select: 'titulo' }).populate('usuario');
        return res.send(prestamo)
    },
}