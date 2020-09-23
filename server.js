const express = require('express');
const mongoose = require('mongoose');
//const connectDB = require('./database/conexion');
const app = express();

//connectDB();
const URI = "mongodb+srv://user-mongodb:1234@cluster0.3d32f.mongodb.net/libreria?retryWrites=true&w=majority";
//'mongodb+srv://user-mongodb:1234@cluster0.3d32f.mongodb.net/libreria';

//herok

// const connectDB = async () => {
//     await 
// };

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://usermongodb:1234@cluster0.3d32f.mongodb.net/libreria";
// const client = new MongoClient(URI, { useUnifiedTopology: true, useNewUrlParser: true });
// client.connect(err => {
//     mongoose.set('useCreateIndex', true);
//      console.log('¡Conectado a la base de datos!')
//   //const collection = client.db("libreria").collection("libros");
//   // perform actions on the collection object
//   console.log(err)
//   client.close();
// });

    mongoose.connect(URI, 
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        },
        console.log("¡Conectado a la base de datos!"),
        mongoose.set('useCreateIndex', true)
    ).catch(error => console.log(error,"Error de conexión"));

// // Or:
// try {
//   await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
// } catch (error) {
//   handleError(error);
// }

// try{
//     mongoose.connect(URI, {
//         useUnifiedTopology: true,
//         useNewUrlParser: true,
//     });
//     mongoose.set('useCreateIndex', true);
//     console.log('¡Conectado a la base de datos!')
// }catch(error){
//     handleError(error);
//     console.log("ERROR de conexión", err)
// }

app.use(express.json({ extended: false }));
app.use(require('./routes'));

const port = process.env.PORT || 3000;
app.listen(port);