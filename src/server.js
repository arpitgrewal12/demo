const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mutler = require('multer-s3')

var db = require('./db')


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,content-type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Max-Age', "86400");
    next();
  });


// for post requests

app.use(express.json())
db.createConnection()

//app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use('/api', require('./routes/api'))






app.listen(3000 , () =>{
    console.log("Server started")
}

)