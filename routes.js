const express = require('express');
const router = new express.Router;
const Usuario = require('./api/usuario');
const Prestamo = require('./api/prestamo');
const Libro = require('./api/libro');
const Autor = require('./api/autor');
const Genero = require('./api/genero');

router.get('/usuarios/consultar', Usuario.verTodos);
router.post('/usuario/crear', Usuario.crear);

router.post('/autores/consultar', Autor.verTodos);
router.post('/autor/crear', Autor.crear);

router.post('/generos/consultar', Genero.verTodos);
router.post('/genero/crear', Genero.crear);

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
