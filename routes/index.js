var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

/* GET home page. */
var db
//
MongoClient.connect('mongodb://localhost:27017/newDB', (err, database) => {
 if (err) return console.log(err)
   db = database
})


var locationsArray = [{lat:39.7392, lng:-104.9903},{lat:37.846848,lng:-111.025394},{lat:37.777042,lng:-111.620492},{lat:33.4484,lng: -112.0740}]

router.get('/', function(req, res, next) {
  console.log(db);
  res.send(locationsArray)
});

router.post('/locations', function(req, res){
  req.body.lat = parseInt(req.body.lat)
  req.body.lng = parseInt(req.body.lng)
  console.log(req.body);

  locationsArray.push(req.body)
  res.send(req.body)
})

module.exports = router;
