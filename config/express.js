var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');

mongoose.connect(config.database);

module.exports = function(app) {
  var app = express();

  app.set('secret', config.secret);
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(express.static('./public/'));

  require('../app/routes/postroute')(app);
  
  return app;
};
