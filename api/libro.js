/*const Libro = require('../models/libro');
const Autor = require('../models/autor');

module.exports = {
    create : async (req, res) => {
        console.log(req.params);
        autor = req.params;
        id = autor.id;
        const { title, summary, isbn} = req.body;
        const libro = await Libro.create({
            title,
            summary,
            isbn,
            autor:id
        });
        await libro.save();

        const autorById = await Autor.findById(id);

        autorById.libros.push(libro);
        await autorById.save();

        return res.send(autorById);
    },

    librosByAutor : async (req,res)=>{
        const { id } = req.params;
        const autorBylibro = await Libro.findById(id).populate('libro');
        res.send(autorBylibro);
    }
}
*/
