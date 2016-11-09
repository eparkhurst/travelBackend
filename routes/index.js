var express = require('express');
var router = express.Router();

/* GET home page. */

var locationsArray = [{lat:39.7392, lng:-104.9903},{lat:33.4484,lng: -112.0740},{lat:32.7157, lng:-117.1611}]

router.get('/', function(req, res, next) {
  res.send(locationsArray)
});

module.exports = router;
