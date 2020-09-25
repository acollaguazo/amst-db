const express = require('express');
const mongoose = require('mongoose');
const app = express();

const URI = "mongodb+srv://user-mongodb:1234@cluster0.3d32f.mongodb.net/libreria?retryWrites=true&w=majority";
//'mongodb+srv://user-mongodb:1234@cluster0.3d32f.mongodb.net/libreria';

mongoose.connect(URI, 
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  console.log("¡Conectado a la base de datos!"),
  mongoose.set('useCreateIndex', true),
  mongoose.set('useFindAndModify', false)
).catch(error => console.log(error,"Error de conexión"));

app.use(express.json({ extended: false }));
app.use(require('./routes'));

const port = process.env.PORT || 3000;
app.listen(port);