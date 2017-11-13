var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var users = require('./users.js');

function logger(req, res,next){
    console.log(new Date(), req.method,req.url);
    next();

}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(logger);
app.use(express.static('www'))   /*ตัวช่วยในการดึงค่าให้แสดงเอาพุดจากโฟล์เดอร์ www*/
app.get('/users', users.findAll)

app.get('/users/roles/:role',users.role);
app.get('/users/search',users.search);
app.get('/users/expired/:expired',users.expired);


app.listen(3000);
console.log('Server is running at http://localhost:3000');

