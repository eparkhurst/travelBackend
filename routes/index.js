var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var knex = require('../db/knex');

/* GET home page. */



router.get('/blogs', function(req, res, next) {
  knex('locations')
  .leftJoin('blogs','locations.id','=','blogs.location_id')
  .then(function(data){
    var toSend = data.map((e)=>{
      e.location = {
        lat:e.lat,
        lng:e.lng
      }
      delete e.lat
      delete e.lng
      return e
    })
    res.send(toSend)
  })

});

router.get('/users', function(req,res,next){
  knex.select().from('users').then(function(data){
    console.log(data);
    res.send(data)
  })
});

router.post('/locations', function(req, res){
  req.body.lat = parseInt(req.body.lat)
  req.body.lng = parseInt(req.body.lng)
  console.log(req.body);

  locationsArray.push(req.body)
  res.send(req.body)
})

module.exports = router;
