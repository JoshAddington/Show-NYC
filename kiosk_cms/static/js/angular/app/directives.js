'use strict';

angular.module('myApp.directives', [])


.directive('fileUploader', function() {
	return {
		restrict: 'E',
		transclude: true,
		template: '<div><input type="file"/><button ng-click="upload()">Upload</button></div>'
		+'<ul><li ng-repeat="file in files">{{file.name}} - {{file.type}}</li></ul>',
		controller: function($scope, $fileUpload) {
			$scope.notReady = true;
			$scope.upload = function() {
				$fileUpload.upload($scope.files);
			};
		},
		link: function($scope, $element) {
			var fileInput = $element.find('input[type="file"]');
			fileInput.bind('change', function(e) {
				$scope.notReady = e.target.files.length == 0;
				$scope.files = [];
				for(i in e.target.files) {
          //Only push if the type is object for some stupid-ass reason browsers like to include functions and other junk
					if(typeof e.target.files[i] == 'object') $scope.files.push(e.target.files[i]);
				}
			});
		}
	}
});
