var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var knex = require('../db/knex');
var queries = require('../lib/dbQueries')
/* GET home page. */



router.get('/blogs', function(req, res, next) {
  // knex('locations')
  // .leftJoin('blogs','locations.id','=','blogs.location_id')
  queries.getBlogs()
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
  var obj = {}
  obj.location={}
  obj.location.lat = Number(req.body.lat)
  obj.location.lng = Number(req.body.lng)
  obj.title = req.body.title
  obj.text = req.body.text
  console.log(obj);
  queries.addBlog(obj)
    .then(function(results){
      res.send(results)
      return results;
    })
    .catch(function(err){
      console.log('Oh NO');
      res.json(err);
    })
})

module.exports = router;
