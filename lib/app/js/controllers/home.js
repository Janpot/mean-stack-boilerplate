/*global angular*/

angular.module('app').controller('home', function (
  $scope,
  user
) {
  'use strict';
  
  $scope.user = user;
  
});
