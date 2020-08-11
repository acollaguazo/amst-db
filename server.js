var express = require('express');
var mongoose = require('mongoose');
var app = express();
//const port = 3000
// app.get('/libros', libros.findAll);
// app.get('/libros/:id', libros.findById);
// app.listen(port);
// console.log('Listening on port 3000...');
// const routes = require('./routes')
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URI;
// "mongodb+srv://user-mongodb:apirestul1@cluster0.3d32f.mongodb.net/libreria?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
//   const collection = client.db("libreria").collection("libros");
  // perform actions on the collection object
  console.log("con",err)
  client.close();
});

/*var mongoose = require('mongoose');
var mongoDB = "mongodb+srv://user-mongodb:apirestul1@cluster0.3d32f.mongodb.net/libreria?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));*/
//connect to mongoose
// to avoid deprecation warning, provide a second argument {useNewUrlParser: true, useUnifiedTopology: true}
// mongoose.connect(
//   dbUrl,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   err => {
//     console.log("mongo db connection", err);
//   }
// );
// user-mongodb:apirestful1@cluster0.3d32f.mongodb.net/<dbname>?retryWrites=true&w=majority