'use strict';

var express        = require('express'),
    path           = require('path'),
    config         = require('config'),
    authentication = require('./services/authentication'),
    passport       = require('passport'),
    redis          = require('./services/redis'),
    csrf           = require('./services/csrf'),
    RedisStore     = require('connect-redis')(express);


// initialize models
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
    var distFolder = path.resolve(__dirname, '../dist');
    app.set('views', distFolder);
    app.use(express.static(distFolder));
  } else {
    var appFolder = path.resolve(__dirname, '../app'),
        buildFolder = path.resolve(__dirname, '../.build');
    app.set('views', appFolder);
    app.use(express.static(appFolder));
    app.use(express.static(buildFolder));
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



module.exports = app;
