const express = require('express');
const mongoose = require('mongoose');
//const connectDB = require('./database/conexion');
const app = express();

//connectDB();
const URI = 'mongodb+srv://user-mongodb:1234@cluster0.3d32f.mongodb.net/libreria';
//"mongodb+srv://user-mongodb:1234@cluster0.3d32f.mongodb.net/libreria?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('¡Conectado a la base de datos!');
};
connectDB();
app.use(express.json({ extended: false }));
app.use(require('./routes'));
const Port = process.env.Port || 3000;

app.listen(Port, () => console.log('Server started'));
// .listen(process.env.PORT, '0.0.0.0');
// .