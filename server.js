var db = require('./config/config');
var app = require('./config/express')();
var port = 3000

app.listen(port, function() {
  console.log('App running live on' + port);
});

module.exports = app;

