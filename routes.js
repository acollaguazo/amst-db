const express = require('express');
const router = new express.Router;
const Usuario = require('./api/usuario');
const Prestamo = require('./api/prestamo');
const Libro = require('./api/libro');

router.get('/usuarios/consultar', Usuario.buscar);
router.post('/usuario/crear', Usuario.crear);
// autor routes
router.post('/prestamo/crear', Prestamo.crear);
// router.post('/autor/find',Autor.find);
// router.post('/autor/find/post/:id', Autor.librosPorAutor);
// libro routes
// router.post('/libro/create/:id', Libro.create);
// router.post('/libro/populate/:id',Libro.librosByAutor);

module.exports = router;
