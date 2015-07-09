'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngSanitize',
  'myApp.vote',
  'myApp.gallery',
  'myApp.submit',
  'myApp.about',
  'myApp.version',
  'myApp.services',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/vote'});
}]);

