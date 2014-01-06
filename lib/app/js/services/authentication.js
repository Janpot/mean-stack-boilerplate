/*global angular*/

angular.module('app').factory('authentication', function (
  $window
) {
  'use strict';
  
  var metaTags = $window.document.getElementsByTagName('meta'),
      user     = null;
  
  for (var i = 0; i < metaTags.length; i += 1) {
    if (metaTags[i].name === 'user') {
      try {
        user = JSON.parse(metaTags[i].content);
      } catch (e) {
        console.warn(e);
      }
    }
  }
    
  return {
    user: user
  };
  
});