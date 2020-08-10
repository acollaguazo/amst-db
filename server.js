var express = require('express'),
libros = require('./routes/libro');
var app = express();
const port = 3000

app.get('/libros', libros.findAll);
app.get('/libros/:id', libros.findById);

app.listen(port);
console.log('Listening on port 3000...');
