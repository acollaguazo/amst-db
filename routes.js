const express = require('express');
const router = new express.Router;
const Usuario = require('./api/usuario');
const Prestamo = require('./api/prestamo');
const Libro = require('./api/libro');
const Autor = require('./api/autor');
const Genero = require('./api/genero');

router.get('/usuarios/consultar', Usuario.verTodos);
router.get('/usuario/buscar/:cedula', Usuario.buscarPorId);
router.post('/usuario/crear', Usuario.crear);
router.put('/usuario/modificar/:id', Usuario.modificar);
router.delete('/usuario/eliminar/:id', Usuario.eliminar);

router.get('/autores/consultar', Autor.verTodos);
router.post('/autor/crear', Autor.crear);

router.get('/generos/consultar', Genero.verTodos);
router.post('/genero/crear', Genero.crear);

router.get('/libros/consultar', Libro.verTodos);
router.post('/libro/crear', Libro.crear);

router.get('/prestamos/consultar', Prestamo.verTodos);
router.post('/prestamo/crear', Prestamo.crear);

module.exports = router;
