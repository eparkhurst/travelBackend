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


var locationsArray = [
  {lat:39.7392, lng:-104.9903},
  {lat:37.846848,lng:-111.025394},
  {lat:37.777042,lng:-111.620492},
  {lat:33.4484,lng: -112.0740},
  {lat:32.746152,lng: -117.159537},
  {lat:34.101509, lng:-118.339386}
]

var blogArray = [
  {location:{lat:37.787611, lng:-122.413868},
    title:"SF",
    text:"made it to SF and it's pretty awesome. I can see why people spend stupid amounts of money to live here"
  },
  {location:{lat:39.7392, lng:-104.9903},
    title:"Venice",
    text:"Got to Pheonix around 5. Met up with some friends from Gschool I haven't seen for a bit at a brewery down town. We spent most of the time talking about life working for a big bank. It doesn't sound terrible but isn't really my dream either. Turns out Poenix is about what I thought it would be. Hot as balls during the summer and pleasant in the winter and very suburby. The couch I slept on was nice. Before they sold out meh irony humblebrag. Irony church-key cred chicharrones williamsburg yr. Chillwave shoreditch truffaut kale chips asymmetrical tote bag small batch, blue bottle trust fund street art. Lyft try-hard humblebrag scenester. Brooklyn tumblr chia lyft, hammock messenger bag austin banjo locavore ramps. Williamsburg you probably haven't heard of them before they sold out, flexitarian succulents dreamcatcher art party drinking vinegar bitters selvage crucifix tbh helvetica quinoa. Raw denim salvia affogato put a bird on it, fap air plant butcher synth."
  },
  {location:{lat:37.846848,lng:-111.025394},
    title:"Phoenix",
    text:"Got to Pheonix around 5. Met up with some friends from Gschool I haven't seen for a bit at a brewery down town. We spent most of the time talking about life working for a big bank. It doesn't sound terrible but isn't really my dream either. Turns out Poenix is about what I thought it would be. Hot as balls during the summer and pleasant in the winter and very suburby. The couch I slept on was nice. Before they sold out meh irony humblebrag. Irony church-key cred chicharrones williamsburg yr. Chillwave shoreditch truffaut kale chips asymmetrical tote bag small batch, blue bottle trust fund street art. Lyft try-hard humblebrag scenester. Brooklyn tumblr chia lyft, hammock messenger bag austin banjo locavore ramps. Williamsburg you probably haven't heard of them before they sold out, flexitarian succulents dreamcatcher art party drinking vinegar bitters selvage crucifix tbh helvetica quinoa. Raw denim salvia affogato put a bird on it, fap air plant butcher synth."
  },
  {location:{lat:37.777042,lng:-111.620492},
    title:"GJ",
    text:"Got to Pheonix around 5. Met up with some friends from Gschool I haven't seen for a bit at a brewery down town. We spent most of the time talking about life working for a big bank. It doesn't sound terrible but isn't really my dream either. Turns out Poenix is about what I thought it would be. Hot as balls during the summer and pleasant in the winter and very suburby. The couch I slept on was nice. Before they sold out meh irony humblebrag. Irony church-key cred chicharrones williamsburg yr. Chillwave shoreditch truffaut kale chips asymmetrical tote bag small batch, blue bottle trust fund street art. Lyft try-hard humblebrag scenester. Brooklyn tumblr chia lyft, hammock messenger bag austin banjo locavore ramps. Williamsburg you probably haven't heard of them before they sold out, flexitarian succulents dreamcatcher art party drinking vinegar bitters selvage crucifix tbh helvetica quinoa. Raw denim salvia affogato put a bird on it, fap air plant butcher synth."
  },
  {location:{lat:33.4484,lng: -112.0740},
    title:"Utah",
    text:"Got to Pheonix around 5. Met up with some friends from Gschool I haven't seen for a bit at a brewery down town. We spent most of the time talking about life working for a big bank. It doesn't sound terrible but isn't really my dream either. Turns out Poenix is about what I thought it would be. Hot as balls during the summer and pleasant in the winter and very suburby. The couch I slept on was nice. Before they sold out meh irony humblebrag. Irony church-key cred chicharrones williamsburg yr. Chillwave shoreditch truffaut kale chips asymmetrical tote bag small batch, blue bottle trust fund street art. Lyft try-hard humblebrag scenester. Brooklyn tumblr chia lyft, hammock messenger bag austin banjo locavore ramps. Williamsburg you probably haven't heard of them before they sold out, flexitarian succulents dreamcatcher art party drinking vinegar bitters selvage crucifix tbh helvetica quinoa. Raw denim salvia affogato put a bird on it, fap air plant butcher synth."
  },
  {location:{lat:32.746152,lng: -117.159537},
    title:"Utah",
    text:"Got to Pheonix around 5. Met up with some friends from Gschool I haven't seen for a bit at a brewery down town. We spent most of the time talking about life working for a big bank. It doesn't sound terrible but isn't really my dream either. Turns out Poenix is about what I thought it would be. Hot as balls during the summer and pleasant in the winter and very suburby. The couch I slept on was nice. Before they sold out meh irony humblebrag. Irony church-key cred chicharrones williamsburg yr. Chillwave shoreditch truffaut kale chips asymmetrical tote bag small batch, blue bottle trust fund street art. Lyft try-hard humblebrag scenester. Brooklyn tumblr chia lyft, hammock messenger bag austin banjo locavore ramps. Williamsburg you probably haven't heard of them before they sold out, flexitarian succulents dreamcatcher art party drinking vinegar bitters selvage crucifix tbh helvetica quinoa. Raw denim salvia affogato put a bird on it, fap air plant butcher synth."
  },
  {location:{lat:34.101509, lng:-118.339386},
    title:"Utah",
    text:"Got to Pheonix around 5. Met up with some friends from Gschool I haven't seen for a bit at a brewery down town. We spent most of the time talking about life working for a big bank. It doesn't sound terrible but isn't really my dream either. Turns out Poenix is about what I thought it would be. Hot as balls during the summer and pleasant in the winter and very suburby. The couch I slept on was nice. Before they sold out meh irony humblebrag. Irony church-key cred chicharrones williamsburg yr. Chillwave shoreditch truffaut kale chips asymmetrical tote bag small batch, blue bottle trust fund street art. Lyft try-hard humblebrag scenester. Brooklyn tumblr chia lyft, hammock messenger bag austin banjo locavore ramps. Williamsburg you probably haven't heard of them before they sold out, flexitarian succulents dreamcatcher art party drinking vinegar bitters selvage crucifix tbh helvetica quinoa. Raw denim salvia affogato put a bird on it, fap air plant butcher synth."
  },
]



router.get('/', function(req, res, next) {
  console.log(db);
  res.send(blogArray)
});

router.get('/blogs', function(req, res, next) {
  res.send(blogArray)
});

router.post('/locations', function(req, res){
  req.body.lat = parseInt(req.body.lat)
  req.body.lng = parseInt(req.body.lng)
  console.log(req.body);

  locationsArray.push(req.body)
  res.send(req.body)
})

module.exports = router;
