var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";

MongoClient.connect(url, function(err, db) {
 if (err) throw err;
  var myobj = [
    {
        "id": 1,"first_name": "Peter","address": "Highway 71",
        "expired": false,"role": "user"
    },
    {
        "id": 2,"first_name": "Amy","address": "Lowstreet 4",
        "expired": false,"role": "user"
    },
    {
        "id": 3,"first_name": "Hannah","address": "Apple st 652",
        "expired": false,"role": "admin"
    },
    {
        "id": 4,"first_name": "Michael","address": "Mountain 21",
        "expired": false,"role": "user"
    },
    {
        "id": 5,"first_name": "Sandy","address": "Valley 345",
        "expired": false,"role": "user"
    },
    {
        "id": 6,"first_name": "Betty","address": "Ocean blvd 2",
        "expired": false,"role": "admin"
    },
    {
        "id": 7,"first_name": "Richard","address": "Green Grass 1",
        "expired": false,"role": "admin"
    },
    {
        "id": 8,"first_name": "Susan","address": "Sky st 331",
        "expired": false,"role": "user"
    },
    {
        "id": 9,"first_name": "Vicky","address": "One way 98",
        "expired": false,"role": "admin"
    },
    {
        "id": 10,"first_name": "John","address": "Yellow Garden 2",
        "expired": false,"role": "user"
    }
        
  ];
  db.collection("users").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
