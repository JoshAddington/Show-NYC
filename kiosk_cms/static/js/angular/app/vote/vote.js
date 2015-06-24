'use strict';

angular.module('myApp.vote', ['ngRoute', 'myApp.services', 'myApp.controllers'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/vote', {
    templateUrl: 'static/templates/vote.html',
    controller: 'VoteCtrl'
  });
}])
