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
        

    // create : async (req, res) => {
    //     autor = req.params;
    //     id = autor.id;
    //     const { title, summary, isbn} = req.body;
    //     const libro = await Libro.create({
    //         title,
    //         summary,
    //         isbn,
    //         autor:id
    //     });
    //     await libro.save();
    //     const autorById = await Autor.findById(id);
    //     autorById.libros.push(libro);
    //     await autorById.save();
    //     return res.send(autorById);
    // },

    // create : async (req, res) => {
    //     console.log(req.params);
    //     user = req.params;
    //     id = user.id;
    //     const { title, subtitle} = req.body;
    //     const prestamoModel = await Prestamo.create({
    //         fecha,
    //         usuario:id,
    //         libro:id
    //     });
    //     await prestamoModel.save();
    //     const userById = await User.findById(id);
    //     userById.posts.push(post);
    //     await userById.save();
    //     return res.send(userById);
    // },

    verTodos: async (req, res) => {
        const prestamo = await Prestamo.find()
        return res.send(prestamo)
    },
}