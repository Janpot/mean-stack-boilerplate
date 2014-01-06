'use strict';

var redis = require('redis');

function logOnceOnNextError(client) {
  client.once('error', function (error) {
    console.log(error);
  });
}

function createClient(config) {
  var client = redis.createClient(
    config.port,
    config.host,
    config.options
  );
  
  logOnceOnNextError(client);
  
  client.on('connect', function () {
    console.log('redis connected');
    logOnceOnNextError(client);
  });
  
  return client;
}

module.exports = {
  createClient: createClient
};
