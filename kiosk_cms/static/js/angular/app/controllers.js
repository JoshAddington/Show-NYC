angular.module('myApp.controllers', [])

.controller('VoteCtrl', ['$scope', 'activePhotos', '$http', '$route', function($scope, activePhotos, $http, $route) {

  $scope.sortType     = 'id'; // set the default sort type
  $scope.sortReverse  = true;  // set the default sort order
  $scope.isClicked = false

  $scope.upvote = function(id) {
    $http.get( window.location.protocol + '//' + window.location.host + '/api/images/'+id+'/upvote/').
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
    console.log(id);
    console.log(document.getElementById("emptyHeart"+id))
    document.getElementById("emptyHeart"+id).src = 'static/icons/FullHeartRed.png'
    document.getElementById("emptyHeart"+id).id = 'fullHeart'
    // $scope.isClicked= true
    // return false

  };


  $scope.reloadRoute = function($scope) {
   $route.reload()
  }

  $scope.load = function() {
    activePhotos.async().then(function(d) {
      $scope.photos = d;
      }).then(function(d){
        angular.forEach($scope.photos, function(item) {
          if (item.voted){

            document.getElementById("emptyHeart"+item.id).src = 'static/icons/FullHeartRed.png'
            document.getElementById("emptyHeart"+item.id).id = 'fullHeart'
    
          }
          else {
          }
      })
    });
      // document.getElementById("fullHeart").hide;
  }

  $scope.loadEmptyHeart = function(id){

  }

  $scope.loadFullHeart = function(id){

  }
  $scope.load()

}])

.controller('GalleryCtrl', ['$scope', 'inactivePhotos', '$route', function($scope, inactivePhotos, $route) {

  $scope.sortType     = 'id'; // set the default sort type
  $scope.sortReverse  = true;  // set the default sort order

  $scope.random = function() {
    console.log("random");
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

  $scope.selectedFilter = 'newest';
  $scope.setSelectedFilter = function(selectedFilter) {
      $scope.selectedFilter = selectedFilter;
      console.log(selectedFilter);
   }

  $scope.load()

}])

.controller('SubmitCtrl', ['$scope', '$http', function($scope, $http) {
      $scope.cropper = {};
      $scope.cropper.sourceImage = null;
      $scope.cropper.croppedImage   = null;
      $scope.bounds = {};
      $scope.bounds.left = 0;
      $scope.bounds.right = 0;
      $scope.bounds.top = 0;
      $scope.bounds.bottom = 0;

    $scope.finish = function() {
        console.log("finished");
        alert("thank you!");
        $scope.submit_info.submitted = false;
        $scope.imgData.first_name = null;
        $scope.imgData.email = null;
        //$scope.cropper.sourceImage = " ";
        $scope.cropper.sourceImage = null;
        $scope.cropper.croppedImage = " ";
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, 400, 300);
      /*** checking to see if form can be valid can be moved to the submit function before storing data and uploading **/
    }

    $scope.submit = function() {
        if ($scope.submit_info.$valid) {
          var data = $scope.imgData;
          var params = {'name': data.first_name, 'email': data.email, 'image': $scope.cropper.croppedImage};
          console.log(params);
  				$http.post( window.location.protocol + '//' + window.location.host + '/api/images/',
                  params
                  )

  			        .success(function(data) {
  			            console.log(data);
  			            
  			        })
                .error(function(data){
                  console.log(data);
                });
            $scope.finish();
         }
        else {
            $scope.submit_info.submitted = true;
        }
    }
}])

.controller('AboutCtrl', function($scope) {});
