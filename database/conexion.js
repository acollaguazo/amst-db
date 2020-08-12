const mongoose = require('mongoose');

const URI ="mongodb+srv://user-mongodb:1234@cluster0.3d32f.mongodb.net/libreria?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('¡Conectado a la base de datos!');
};

module.exports = connectDB;