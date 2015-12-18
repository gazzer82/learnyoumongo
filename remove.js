var mongo = require('mongodb').MongoClient;

//Mongo URL
var url = 'mongodb://localhost:27017/' + process.argv[2];

console.log(process.argv);

mongo.connect(url,function(err,db){
    if (err) throw err;
    var collection = db.collection(process.argv[3]);
    collection.remove({
        _id: process.argv[4]
    },function(err){
        if (err) throw err;
        db.close();
    })
})