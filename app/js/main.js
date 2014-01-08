/*global angular*/

angular.module('app', [
  'ngRoute',
  'ngAnimate'
]).config(function (
  $locationProvider,
  $routeProvider
) {
  'use strict';
  
  $routeProvider.when('/', {
    templateUrl: 'partials/home.html',
    controller: 'home',
    resolve: {
      // inject dependencies explicitely because of ngmin
      user: [
        'authentication',
        '$location',
        function (authentication, $location) {
          if (authentication.user) {
            return authentication.user;
          } else {
            $location.path('/authenticate').replace();
          }
        }
      ]
    }
  });
  
  $routeProvider.when('/authenticate', {
    templateUrl: 'partials/authenticate.html'
  });
  
  $routeProvider.otherwise({redirectTo: '/'});
  
});
