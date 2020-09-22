const Libro = require('../models/libro');

module.exports = {
    crear: async (req, res) => {
        const { titulo, editor, editorial, calificacion, autor, genero } = req.body;
        let libro = {};
        libro.titulo = titulo;
        libro.editor = editor;
        libro.editorial = editorial;
        libro.calificacion = calificacion;
        libro.autor = autor;
        libro.genero = genero;
        let libroModel = new Libro(libro);
        libroModel.save((err, personaDB) => {
            msj: libro
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se pudo registrar el libro',
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
        const libro = await Libro.find().populate("autor").populate("genero");
        return res.send(libro)
    },
}