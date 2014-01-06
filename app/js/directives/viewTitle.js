/*global angular*/

angular.module('app').directive('viewTitle', function () {
  'use strict';
  
  return function (scope, elm, attrs) {
    attrs.$observe('viewTitle', function (value) {
      angular.element('html head title').text(value);
    });
  };
  
});
