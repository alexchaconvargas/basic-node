// -------------SET UP ---------

var express = require('express');
var app = express();  							// Create our app with express
var mongoose = require('mongoose');            // mongoose for mongodb
var port     = process.env.PORT || 3000; 		// set the port
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var database = require('./config/database');
var fs = require('fs');

//-----------LOAD CONFIG-----------

//mongoose.connect(database.url);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

var expressLogFile = fs.createWriteStream('./logs/express.log', {flags: 'a'});


// routes ======================================================================
require('./app/routes.js')(app);

//-----------SETTING UP SERVER-----------
app.listen(port);
console.log("App listening on port " + port);
