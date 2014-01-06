'use strict';

var express        = require('express'),
    path           = require('path'),
    config         = require('config'),
    authentication = require('./services/authentication'),
    passport       = require('passport'),
    mongoose       = require('mongoose'),
    redis          = require('./services/redis'),
    csrf           = require('./services/csrf'),
    RedisStore     = require('connect-redis')(express);




// initialize models
mongoose.connect(config.mongodb.uri, config.mongodb.options);
require(path.resolve(__dirname, 'models'));


var app = express();
app.configure(function () {
  
  // bodyparser
  app.use(express.urlencoded());
  app.use(express.json());
  
  // sessions
  app.use(express.cookieParser());
  app.use(express.session({
    secret: 'keyboard cat',
    store: new RedisStore({
      client: redis.createClient(config.redis)
    })
  }));
  
  // CSRF
  app.use(express.csrf({ value: csrf.getCsrfToken }));
  app.use(csrf.setCsrfToken);
  
  // authentication
  app.use(passport.initialize());
  app.use(passport.session());
  
  // server
  app.engine('.html', require('ejs').renderFile);
  app.use(app.router);
  
  if (config.mountDist) {
    app.set('views', __dirname + '/dist');
    app.use(express.static(__dirname + '/dist'));
  } else {
    app.set('views', __dirname + '/app');
    app.use(express.static(__dirname + '/app'));
    app.use(express.static(__dirname + '/.build'));
  }
  
});



// authentication

app.get('/auth/google', passport.authenticate('google'));
  
app.get('/auth/google/return', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/'
}));

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});



// webpage

var index = require('./routes/index');
app.get('/index.html', function (req, res) {
  res.redirect('/');
});

app.get('/', index.render);




app.use('/users/*', authentication.ensureAuthenticated);



app.listen(config.port);
