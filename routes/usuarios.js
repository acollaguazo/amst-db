var mongo = require('mongodb');
var Server = mongo.Server;
var Db = mongo.Db;
var BSON = mongo.BSONPure;

// var mongoose = require('mongoose');
// var dbURI=process.env.MONGODB_URI;
// mongoose.connect(dbURI.toString(), function(err){    
//     if(err){
//     console.log('Some problem with the connection ' +err)   
//     } 
//     else {
//     console.log('The Mongoose connection is ready')  
//     }

// })

// const MongoClient = require('mongodb').MongoClient;
// const uri = process.env.MONGODB_URI;
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("libreria").collection("autor");
//   // perform actions on the collection object
//   client.close();
// });


var server = new Server('200.9.176.229', 27017, {auto_reconnect: true});
db = new Db('winedb', server);


db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'winedb' database");
        db.collection('wines', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'wines' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});


exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving wine: ' + id);
    db.collection('wines') 
      .findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
};


exports.findAll = function(req, res) {
    db.collection('wines', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};


exports.addWine = function(req, res) {
    var wine = req.body;
    console.log('Adding wine: ' + JSON.stringify(wine));
    db.collection('wines', function(err, collection) {
        collection.insert(wine, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}


exports.deleteWine = function(req, res) {
    var id = req.params.id;
    console.log('Deleting wine: ' + id);
    db.collection('wines')
        .remove({'_id':new BSON.ObjectID(id)}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
}
