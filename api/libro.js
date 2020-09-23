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

    verTodos: async (res) => {
        const libro = await Libro.find().populate("autor").populate("genero");
        return res.send(libro)
    },

    buscarPorId: async (req, res) => {
        let _id = req.params._id;
        Libro.find({_id: _id}, function(err, info) {
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se encontró el libro solicitado',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    libro: info
                });
            }
        });
    },

    modificar: async (req, res) => {        
        let _id = req.params.id;
        let body = req.body;
        Libro.updateOne({ _id: _id }, {
                $set: body
            },
            function(error, info) {
                if (error) {
                    res.json({
                        resultado: false,
                        msg: 'No se pudo modificar el libro',
                        err
                    });
                } else {
                    res.json({
                        resultado: true,
                        msg: 'Libro modificado correctamente',
                        libro: info
                    })
                }
            }
        )
    },

    eliminar: async (req, res) => {
        let _id = req.params.id;
        Libro.deleteOne({_id: _id}, function(err, info) {
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se pudo eliminar el libro',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    msj: 'El libro se eliminó correctamente',
                    libro: info
                });
            }
        });
    }
}