var mongo = require('mongodb').MongoClient;

//Mongo URL
var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url,function(err,db){
    if(err){
        throw err;
    } else {
        findProject(db);
    }
});

function findProject(db){
    var collection = db.collection('parrots');
    collection.find({
            //Query
            age: {$gt : parseInt(process.argv[2], 10)} //Only greater than the passed age
        },
        {
            //Projection
            _id: false //Exxclude _id
        })
    .toArray(function(err,results){
        console.log(results);
        db.close();
    });
}