'use strict';

angular.module('myApp.about', ['ngRoute', 'myApp.services', 'myApp.controllers'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'about/about.html',
    controller: 'AboutCtrl'
  });
}])
