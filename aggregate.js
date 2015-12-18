var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url,function(err,db){
    if (err) throw err;
    var collection = db.collection('prices');
    //console.log(process.argv[2]);
    collection.aggregate([
        {
            $match: {size: process.argv[2]}
        },
        {
            $group: {
                _id: 'average',
                price: {
                    $avg: '$price'
                }
            }
        }
    ]).toArray(function(err,results){
        if (err) throw err;
        console.log(Number(results[0].price).toFixed(2));
        db.close();
    })
})