exports.findAll = function(req, res) {    
    res.send([{titulo:'Cien años de soledad'}, {titulo:'Crimen y castigo'}, {titulo:'Almas muertas'}]);
};

exports.findById = function(req, res) {
    res.send({id:req.params.id, editor:'Franciso Porrúa', editorial:'Sudamericana', genero:'Novela', calificacion: 5});
}