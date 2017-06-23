//import dependencies
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    db = require('./model');


//create instances
var app = express(),
    router = express.Router();

// set port to env or 3000
var port = process.env.API_PORT || 3001;

//db config
//ADD YOUR INFO HERE!
mongoose.connect(process.env.MONGODB_URI || 'mongodb://benjamin:password@ds133162.mlab.com:33162/dronedb');

//config API to use bodyParser and look for JSON in req.body
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

//Prevent CORS errors
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //Remove caching
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//set route path and init API
router.get('/', function(req,res) {
  res.json({message: 'API Initialized!'});
});

app.get('/categories', function(req, res) {
  db.Part.find(function(err, foundParts){
    if(err){return console.log(err)}
    var uniqueCategories = {};
    function unique(foundParts) {
      return foundParts.filter(function(part) {
        return uniqueCategories.hasOwnProperty(part.category) ? false : (uniqueCategories[part.category] = true);
      })
    }
    var uniqueHash = unique(foundParts).map(part => {
      return part.category;
    });
    res.json({categories: uniqueHash});
  })
})
//add /parts route to our /api router here
  //retrieve all parts from the database
app.get('/parts', function(req, res) {
    //looks at our Part Schema
    console.log('I got hit: Searching: ', req.query.category)
    if(req.query.category){

      db.Part.find({category: req.query.category}, function(err, parts) {
        if (err) {
          res.send(err);
        }
        //responds with a json object of our database parts.
        res.json(parts);
      });

    } else {

      db.Part.find(function(err, parts) {
        if (err)
        res.send(err);
        //responds with a json object of our database parts.
        res.json(parts)
      });
    }
  })



  // router.route('/api/parts')
  //   //retrieve a part from the database
  //   .get(function(req, res) {
  //     // to get category: req.query.category
  //     //looks at our Part Schema
  //     db.Part.find({category: 'frame'}, function(err, parts) {
  //       if (err) {
  //         res.send(err);
  //       }
  //       //responds with a json object of our database parts.
  //       res.json(parts);
  //     });
  //   })



  //post new drone to the database
    app.post('/drone', function(req, res) {
      db.Drone.create(req.body, function(err, succ) {

          if (err){
            res.send(err);
          }
          res.json({ drone: 'drone successfully added!' });
        });
      });

    //get all drones
    app.get('/drone', function(req, res) {
      db.Drone.find({})
        .populate('frame')
        .populate('camera')
        .populate('motor')
        .populate('electronicSpeedController')
        .populate('flightController')
        .populate('videoTransmitter')
        .populate('propeller')
        .populate('transmitter')
        .populate('goggle')
        .exec(function(err, allDrones){
          if(err) {
            res.send(err);
          }
          res.json(allDrones);
        })
      });



//use router config when we call /API
app.use('/', router);

//start server
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
