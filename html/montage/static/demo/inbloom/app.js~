
/**
 * Module dependencies.
 */

var express = require('express');
var request = require('request');
var routes = require('./routes');

var app = express.createServer();

app.configure(function(){
  app.set('port', process.env.PORT || 1337);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({secret: 'furious mustard'}));
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// ROUTES
app.get('/', routes.login);
app.get('/oauth', routes.oauth);
app.get('/apiProxy', routes.apiProxy);

app.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
