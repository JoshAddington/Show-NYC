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
    $scope.submitted = false;
    $scope.uploadPhoto = function(element) {
      var reader = new FileReader();
      reader.onload = $scope.imageIsLoaded;
      reader.readAsDataURL(element.files[0]);
    }
    $scope.imageIsLoaded = function(e) {
        $scope.$apply(function() {  
            $scope.imageUrl = e.target.result;
            $scope.display = true;
        });
    }
    $scope.finish = function() {
      if ($scope.submit_info.$valid) {
          console.log("finished");
          $scope.imgData.first_name = null;
          $scope.imgData.email = null;
          $scope.imageUrl = " ";
      } 
      else {
        $scope.submit_info.submitted = true;
      }
      /*** checking to see if form can be valid can be moved to the submit function before storing data and uploading **/
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
