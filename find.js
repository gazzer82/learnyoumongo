var mongo = require('mongodb').MongoClient

//Mongo URL
var url = 'mongodb://localhost:27017/learnyoumongo'

//Connect to MongoDB
mongo.connect(url,function(err,db){
    if(err){
        console.log('error connecting');
        console.log(err);
    } else {
        //console.log('We are connected');
        findParrots(db);
    }
});

function findParrots(db){

    var collection = db.collection('parrots');

    collection.find({age: {$gt: parseInt(process.argv[2],10)}}).toArray(function(err,results){
        if(err){
            console.log('error fetching items');
        } else {
            console.log(results);
            db.close();
        }
    });
}