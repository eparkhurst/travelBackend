var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
jsonParser = bodyParser.json()
/* GET home page. */

var locationsArray = [{lat:39.7392, lng:-104.9903},{lat:33.4484,lng: -112.0740},{lat:32.7157, lng:-117.1611}]

router.get('/', function(req, res, next) {
  res.send(locationsArray)
});

router.post('/locations', jsonParser,  function(req, res){
  req.body.lat = parseInt(req.body.lat)
  req.body.lng = parseInt(req.body.lng)
  console.log(req.body);

  locationsArray.push(req.body)
  res.send(req.body)
})
module.exports = router;
