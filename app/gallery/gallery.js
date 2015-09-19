'use strict';

angular.module('myApp.gallery', ['ngRoute', 'myApp.services', 'myApp.controllers'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/gallery', {
        templateUrl: 'static/app/templates/gallery.html',
        controller: 'GalleryCtrl'
    });
}])
