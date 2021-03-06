var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";
var db;

MongoClient.connect(url, function(err, database) {
    if (err) throw err;
    db = database;
    console.log("Connected to " + url);
    });

function findAll(req, res){
    //Get data from mongoDB
        //if (err) throw err;
        var query = {}; 
        db.collection("users").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.json(result);
        });

}

function search(req, res) {
    var fname = req.query.fname;
    console.log(fname);
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var query = { first_name: new RegExp('.*' + fname + '.*') };
        console.log(query);
        db.collection("users").find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
    });
}

function role(req, res) {
    var fname = req.params.role;
    console.log(fname);
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var query = { role: new RegExp('.*' + fname + '.*') };
        console.log(query);
        db.collection("users").find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
    });
}

function expired(req, res) {
    var expired= req.params.expired; 
    var query; 
    if(expired=="true") {
        query={expired:true};
    }
    else{
        query={expired:false};
    }     
    db.collection("users").find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);            
            res.json(result);
    });    
}



module.exports = {
    findAll: findAll,
    search: search,
    role : role,
    expired :  expired
};
