const express = require('express');
const router = new express.Router;
const Usuario = require('./api/usuario');
const Libro = require('./api/libro');
router.get('/crear',Usuario.crear);
// autor routes
// router.post('/autor/create',Autor.create);
// router.post('/autor/find',Autor.find);
// router.post('/autor/find/post/:id', Autor.librosPorAutor);
// libro routes
// router.post('/libro/create/:id', Libro.create);
// router.post('/libro/populate/:id',Libro.librosByAutor);

module.exports = router;
