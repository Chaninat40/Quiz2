var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var query = { address: /^S/ };
  db.collection("users").find(query).toArray(function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});