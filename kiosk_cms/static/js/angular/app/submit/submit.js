'use strict';

angular.module('myApp.submit', ['ngRoute', 'myApp.services', 'myApp.controllers'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/submit', {
    templateUrl: 'static/templates/submit.html',
    controller: 'SubmitCtrl'
  });
}])
