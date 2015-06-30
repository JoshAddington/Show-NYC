angular.module('myApp.controllers', [])

.controller('VoteCtrl', ['$scope', 'activePhotos', '$http', '$route', function($scope, activePhotos, $http, $route) {

  $scope.sortType     = 'id'; // set the default sort type
  $scope.sortReverse  = true;  // set the default sort order
  $scope.isClicked = false

  $scope.upvote = function(id) {
    $http.get('http://intern-cms-dev.elasticbeanstalk.com/api/images/'+id+'/upvote/').
      success(function(data, status, headers, config) {
        // $scope.load()
      }).
      error(function(data, status, headers, config) {
      });
  }

  $scope.downvote = function(id) {
    $http.get('http://intern-cms-dev.elasticbeanstalk.com/api/images/'+id+'/downvote/').
      success(function(data, status, headers, config) {
        $scope.load()
      }).
      error(function(data, status, headers, config) {
      });
  }

  $scope.changeImage = function(id){
    // console.log($sco.isClicked)
    console.log(document.getElementById("emptyHeart"+id))
    document.getElementById("emptyHeart"+id).src = 'static/icons/FullHeartRed.png'
    // $scope.isClicked= true
    // return false

  };


  $scope.reloadRoute = function($scope) {
   $route.reload()
  }

  $scope.load = function() {
    activePhotos.async().then(function(d) {
      $scope.photos = d;

      angular.forEach($scope.photos, function(item) {
        item.rank = 0.5 - Math.random()
      });
    });
      // document.getElementById("fullHeart").hide;
  }

  $scope.load()

}])

.controller('GalleryCtrl', ['$scope', 'inactivePhotos', '$route', function($scope, inactivePhotos, $route) {

  $scope.sortType     = 'id'; // set the default sort type
  $scope.sortReverse  = true;  // set the default sort order

  $scope.random = function() {
   $scope.load()
   $scope.sortType = 'rank'
  }

  $scope.load = function() {
    inactivePhotos.async().then(function(d) {
      $scope.photos = d;
      // return $scope.photos
      console.log('ctrl')

      angular.forEach($scope.photos, function(item) {
        item.rank = 0.5 - Math.random()
      });
    });
  }

  $scope.load()

}])

.controller('SubmitCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }
})

.controller('AboutCtrl', function($scope) {});
