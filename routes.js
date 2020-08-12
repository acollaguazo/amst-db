const express = require('express');
const router = new express.Router;
const Usuario = require('./api/usuario');
const Prestamo = require('./api/prestamo');
const Libro = require('./api/libro');

router.get('/usuarios/consultar', Usuario.verTodos);
router.post('/usuario/crear', Usuario.crear);

router.get('/libros/consultar', Libro.verTodos);
router.post('/libro/crear', Libro.crear);

router.post('/prestamos/consultar', Prestamo.verTodos);
router.post('/prestamo/crear', Prestamo.crear);
// router.post('/autor/find',Autor.find);
// router.post('/autor/find/post/:id', Autor.librosPorAutor);
// libro routes
// router.post('/libro/create/:id', Libro.create);
// router.post('/libro/populate/:id',Libro.librosByAutor);

module.exports = router;
