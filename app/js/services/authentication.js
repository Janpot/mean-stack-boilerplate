/*global angular*/

angular.module('app').factory('authentication', function (
  $window,
  $log
) {
  'use strict';
  
  var userJson = angular.element('head meta[name=user]')[0].content,
      user     = null;
    
  try {
    user = JSON.parse(userJson);
  } catch (e) {
    $log.error(e);
  }
    
  return {
    user: user
  };
  
});