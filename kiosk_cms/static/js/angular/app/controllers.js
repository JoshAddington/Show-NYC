angular.module('myApp.controllers', [])

.controller('VoteCtrl', function($scope, activePhotos) {

  $scope.sortType     = 'id'; // set the default sort type
  $scope.sortReverse  = true;  // set the default sort order
  $scope.upvote = function(id) {
   console.log(id)
  }

  activePhotos.async().then(function(d) {
    $scope.photos = d;

    angular.forEach($scope.photos, function(item) {
      item.rank = 0.5 - Math.random()
    });
  });

})

.controller('GalleryCtrl', ['$scope', 'inactivePhotos', '$route', function($scope, inactivePhotos, $route) {

  $scope.sortType     = 'id'; // set the default sort type
  $scope.sortReverse  = true;  // set the default sort order
  $scope.reloadRoute = function($scope) {
   $route.reload()
  }

  inactivePhotos.async().then(function(d) {
    $scope.photos = d;
    // return $scope.photos
    console.log('ctrl')

    angular.forEach($scope.photos, function(item) {
      item.rank = 0.5 - Math.random()
    });
  });
}])

.controller('SubmitCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }
})

.controller('AboutCtrl', function($scope) {});
