var express = require('express');
var mongoose = require('mongoose');
var app = express();
//const port = 3000
// app.get('/libros', libros.findAll);
// app.get('/libros/:id', libros.findById);
// app.listen(port);
// console.log('Listening on port 3000...');
// const routes = require('./routes')



/*const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URI;
// "mongodb+srv://user-mongodb:apirestul1@cluster0.3d32f.mongodb.net/libreria?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
//   const collection = client.db("libreria").collection("libros");
  // perform actions on the collection object
  console.log("con",err)
  client.close();
});*/

//var mongoose = require('mongoose');


/*var mongoDB = process.env.MONGODB_URI;
// "mongodb+srv://user-mongodb:apirestul1@cluster0.3d32f.mongodb.net/libreria?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
console.log ("DBBBBBBb", db)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));*/

var dbURI='mongodb+srv://user-mongodb:apirestul1@cluster0.3d32f.mongodb.net/libreria?retryWrites=true&w=majority';
mongoose.connect(dbURI.toString(), function(err){    
    if(err){
    console.log('Some problem with the connection ' +err)   
    } 
    else {
    console.log('The Mongoose connection is ready')  
    }

})

// connect to mongoose
// to avoid deprecation warning, provide a second argument {useNewUrlParser: true, useUnifiedTopology: true}
// const uri = process.env.MONGODB_URI
// mongoose.connect(
//     process.env.MONGODB_URI,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   err => {
//     console.log("mongo db connection", err);
//   }
// );
// user-mongodb:apirestful1@cluster0.3d32f.mongodb.net/<dbname>?retryWrites=true&w=majority