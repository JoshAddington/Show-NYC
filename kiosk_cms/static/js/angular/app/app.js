'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.vote',
  'myApp.gallery',
  'myApp.submit',
  'myApp.about',
  'myApp.version',
  'myApp.services',
  'myApp.controllers'
  'angular-img-cropper'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/vote'});
}]);

