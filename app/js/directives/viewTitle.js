/*global angular*/

angular.module('app')
  .directive('viewTitle', function (
    $document
  ) {
    'use strict';
    
    return function (scope, elm, attrs) {
      attrs.$observe('viewTitle', function (value) {
        $document.prop('title', value);
      });
    };
    
  });
