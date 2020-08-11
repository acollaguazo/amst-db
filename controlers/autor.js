const Autor = require('../models/autor');

module.exports = {
    create : async (req, res) =>{
        const { first_name, family_name, date_of_birth } = req.body;
        const user = await Autor.create({
            first_name,
            family_name,
            date_of_birth
        })

        return res.send(user)
    },

    find : async (req, res) => {
        const user = await User.find()
        return res.send(user)
    },

    librosPorAutor : async (req, res) => {
       const { id } = req.params;
       const user = await Autor.findById(id).populate('libros');

        res.send(user.libros);
    }
}
