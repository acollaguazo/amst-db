const Prestamo = require('../models/prestamo');

module.exports = {
    crear: async (req, res) => {
        prestamo = req.params;
        usuario = prestamo.usuario;
        libro = prestamo.libro;
        const { fecha } = req.body;
        const prestamoModel = await Prestamo.create({
            fecha,
            id_usuario:usuario,
            libros:libro
        });
        await prestamoModel.save();
        // const libroById = await Libro.findById(libro);
        // libroById.libros.push(prestamoModel);
        // await libroById.save();
        // return res.send(libroById);
        //res.json(prestamoModel);
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

    buscar: async (req, res) => {
        const prestamo = await Prestamo.find()
        return res.send(prestamo)
    },
}