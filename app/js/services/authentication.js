/*global angular*/

angular.module('app').factory('authentication', function (
  $document,
  $window,
  $log
) {
  'use strict';
    
  var meta = {},
      user = null;
  
  angular.forEach($document.find('meta'), function (metaTag) {
    if (metaTag.name) {
      meta[metaTag.name] = metaTag.content;
    }
  });
    
  try {
    user = JSON.parse(meta.user);
  } catch (e) {
    $log.error(e);
  }
    
  return {
    user: user
  };
  
});