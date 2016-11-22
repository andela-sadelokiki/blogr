var db = require('./config/config');
var app = require('./config/express')();
var port = 8080

app.listen(port, function() {
  console.log('App running live on' + port);
});

module.exports = app;

