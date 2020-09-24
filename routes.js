const express = require('express');
const router = new express.Router;
const Usuario = require('./controllers/usuario');
const Prestamo = require('./controllers/prestamo');
const Libro = require('./controllers/libro');
const Autor = require('./controllers/autor');
const Genero = require('./controllers/genero');

router.get('/usuarios', Usuario.verTodos);
router.get('/buscar_usuario/:cedula', Usuario.buscarPorId);
router.post('/crear_usuario', Usuario.crear);
router.put('/modificar_usuario/:id', Usuario.modificar);
router.delete('/eliminar_usuario/:id', Usuario.eliminar);

router.get('/libros', Libro.verTodos);
router.get('/libros/:id', Libro.buscarPorId);
router.post('/libros', Libro.crear);
router.put('/libros/:id', Libro.modificar);
router.delete('/libros/:id', Libro.eliminar);

router.get('/autores', Autor.verTodos);
router.get('/autores/:id', Autor.buscarPorId);
router.post('/autores', Autor.crear);
router.put('/autores/:id', Autor.modificar);
router.delete('/autores/:id', Autor.eliminar);

router.get('/generos', Genero.verTodos);
router.get('/generos/:id', Genero.buscarPorId);
router.post('/generos', Genero.crear);
router.put('/generos/:id', Genero.modificar);
router.delete('/generos/:id', Genero.eliminar);

router.get('/prestamos/consultar', Prestamo.verTodos);
router.post('/prestamo/crear', Prestamo.crear);

module.exports = router;
