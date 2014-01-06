var config   = require('config'),
    mongoose = require('mongoose'),
    server   = require('./server');


mongoose.connect(config.mongodb.uri, config.mongodb.options);
server.listen(config.port);
