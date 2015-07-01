angular.module('myApp.controllers', [])

.controller('VoteCtrl', ['$scope', 'activePhotos', '$http', '$route', function($scope, activePhotos, $http, $route) {

  $scope.sortType     = 'id'; // set the default sort type
  $scope.sortReverse  = true;  // set the default sort order

  $scope.upvote = function(id) {
    $http.get('http://intern-cms-dev.elasticbeanstalk.com/api/images/'+id+'/upvote/').
      success(function(data, status, headers, config) {
        $scope.load()
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

  $scope.load()

}])

.controller('SubmitCtrl', ['$scope', '$http', function($scope, $http) {


    $scope.uploadPhoto = function(element) {
      console.log("uploaded!");
      var reader = new FileReader();
      reader.onload = $scope.imageIsLoaded;
      reader.readAsDataURL(element.files[0]);
    }
    $scope.imageIsLoaded = function(e) {
        $scope.$apply(function() {  
            $scope.image = e.target.result;
            $scope.display = true;
        });
    }
    $scope.reset = function() {
      $scope.display = false;
      $scope.imgData.first_name = null;
      $scope.imgData.email = null;
      alert("thank you!");
    }

  $scope.submit = function() {
        var form = new FormData();
        var data = $scope.imgData;
        form.append('name', data.first_name);
        form.append('campaign_id', 2);
        form.append('email', data.email);
        form.append('image', $scope.myFile);
        console.log($scope.myFile);


				$http.post( window.location.protocol + '//' + window.location.host + '/api/images/',
                form, {
                    headers: {'Content-Type': undefined},
                    transformRequest: function(data){ return data;} 
              })

			        .success(function(data) {
			            console.log(data);
			            
			        })
              .error(function(data){
                console.log(data);
              });
			};
}])

.controller('AboutCtrl', function($scope) {});
