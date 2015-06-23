angular.module('myApp.controllers', [])

.controller('VoteCtrl', function($scope, ActivePhotos) {

  $scope.photos = ActivePhotos.all();

})

.controller('GalleryCtrl', function($scope, InactivePhotos) {

  $scope.photos = InactivePhotos.all();

})

.controller('SubmitCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }
})

.controller('AboutCtrl', function($scope) {});
