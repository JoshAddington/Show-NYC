'use strict';

angular.module('myApp.submit', ['ngRoute', 'myApp.services', 'angular-img-cropper', 'myApp.controllers'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/submit', {
        templateUrl: 'static/app/templates/submit.html',
        controller: 'SubmitCtrl'
    });
}])

.config(function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
})

.directive('validFile', function() {
    return {
        require: 'ngModel',
        link: function(scope, el, attrs, ngModel) {
            ngModel.$render = function() {
                ngModel.$setViewValue(el.val());
            };

            el.bind('change', function() {
                scope.$apply(function() {
                    ngModel.$render();
                });
            });
        }
    };
})

// directive for accessing the file to be uploaded.
.directive('fileModel', ['$parse', function($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function() {
                scope.$apply(function() {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);
