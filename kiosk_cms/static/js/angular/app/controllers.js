angular.module('myApp.controllers', [])

.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
})


.controller('VoteCtrl', ['$scope', 'activePhotos', '$http', '$route', function($scope, activePhotos, $http, $route) {

  $scope.sortType     = 'id'; // set the default sort type
  $scope.sortReverse  = true;  // set the default sort order
  $scope.isClicked = false

  $scope.upvote = function(id) {
    $http.get( 'http://intern-cms-dev.elasticbeanstalk.com/api/images/'+id+'/upvote/').
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
      console.log($scope.photos)
      }).then(function(d){
        angular.forEach($scope.photos, function(item) {
          item.loadHeart = {};
          if (item.voted){
            item.loadHeart.id = "fullHeart";
            item.loadHeart.src="static/icons/FullHeartRed.png";
            item.isClicked=true;

            }
          else {
            item.loadHeart.id = ("emptyHeart" + item.id);
            item.loadHeart.src = "static/icons/EmptyHeartRed.png";
            // photo.isClicked=false
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
  $scope.filterOptions = {
    opts: [
      {id : 2, name : 'Campaigns', campaign: 'All' }
    ]
  };


  $scope.filterItem = {
   opt: $scope.filterOptions.opts[0]
 }




  $scope.customFilter = function (data) {
  if (data.campaign === $scope.filterItem.opt.campaign) {
    return true;
  } else if ($scope.filterItem.opt.campaign === "All") {
    return true;
  } else {
    return false;
  }
};

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
        if ($scope.filterOptions.opts.indexOf(item.campaign) == -1) {
          console.log(item)
          $scope.filterOptions.opts.push({name: item.campaign, campaign: item.campaign}, item.campaign)
        }
      });
      angular.forEach($scope.filterOptions.opts, function(item, key){
        if (item.name == undefined) {
          console.log(item)
          $scope.filterOptions.opts.splice(key,1)
        }
        else {
          // console.log(item)
        }

      })
      console.log($scope.filterOptions.opts)
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

      $scope.uploadPhoto = function(element) {
        var reader = new FileReader();
        reader.onload = $scope.imageIsLoaded;
        reader.readAsDataURL(element.files[0]);
        // console.log(element.files[0]);
      }
      $scope.imageIsLoaded = function(e) {
          $scope.$apply(function() {
              $scope.imageUrl = e.target.result;
              $scope.display = true;
              console.log(e.target.result);
          });
      }
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
  				$http.post('http://intern-cms-dev.elasticbeanstalk.com//api/images/',
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

.controller('AboutCtrl', ['$scope', 'winningPhotos', function($scope, winningPhotos) {

  $scope.sortType     = 'id'; // set the default sort type
  $scope.sortReverse  = true;  // set the default sort order

  $scope.load = function() {
    winningPhotos.async().then(function(d) {
      $scope.photos = d;
      photo = $scope.photos[0]
      photo.newId = "winning-icon"
      photo.newSrc = "static/icons/prize-red.png"
    });
  }
  $scope.load()

}]);
