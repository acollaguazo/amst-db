const express = require('express');
const router = new express.Router;
const Usuario = require('./api/usuario');
const Prestamo = require('./api/prestamo');
const Libro = require('./api/libro');
const Autor = require('./api/autor');
const Genero = require('./api/genero');

router.get('/usuarios', Usuario.verTodos);
router.get('/buscar_usuario/:cedula', Usuario.buscarPorId);
router.post('/crear_usuario', Usuario.crear);
router.put('/modificar_usuario/:id', Usuario.modificar);
router.delete('/eliminar_usuario/:id', Usuario.eliminar);

router.get('/autores', Autor.verTodos);
router.post('/autor/crear', Autor.crear);

router.get('/generos/consultar', Genero.verTodos);
router.post('/genero/crear', Genero.crear);

router.get('/libros', Libro.verTodos);
router.post('/libro/crear', Libro.crear);

router.get('/prestamos/consultar', Prestamo.verTodos);
router.post('/prestamo/crear', Prestamo.crear);

module.exports = router;
