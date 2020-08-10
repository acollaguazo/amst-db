exports.findAll = function(req, res) {    
    res.send([{nombre:'Rosa', apellido:'Pincay'}, 
    {nombre:'Adriana', apellido:'Collaguazo'}]);
};

exports.findById = function(req, res) {
    res.send({id:req.params.id, email:'rmpincay@espol.edu.ec',contraseña:'amst202020'});
}
    