var mongo = require('mongodb').MongoClient;

var firstName = process.argv[2]
var lastName = process.argv[3]

var person = {
    firstName : firstName,
    lastName : lastName
}

//Mongo URL
var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url,function(err,db){
    if (err){
       throw err;
    } else {
        var docs = db.collection('docs');
        docs.insert(person,function(err,result){
            if(err){
                throw err;
            } else {
                console.log(JSON.stringify(person));
                //console.log('****************');
            }
            db.close();
        });
    }
});