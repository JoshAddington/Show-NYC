angular.module('myApp.controllers', [])

.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
})


.controller('VoteCtrl', ['$scope', 'activePhotos', 'activeCampaign', '$http', '$route', function($scope, activePhotos, activeCampaign, $http, $route) {

    $scope.sortType = 'id'; // set the default sort type
    $scope.sortReverse = true; // set the default sort order
    $scope.isClicked = false

    $scope.upvote = function(id) {
        $http.get(window.location.protocol + '//' + window.location.host + '/api/images/' + id + '/upvote/').
        success(function(data, status, headers, config) {}).
        error(function(data, status, headers, config) {});
    }

    $scope.downvote = function(id) {
        $http.get(window.location.protocol + '//' + window.location.host + '/api/images/' + id + '/downvote/').
        success(function(data, status, headers, config) {
            $scope.load()
        }).
        error(function(data, status, headers, config) {});
    }

    $scope.changeImage = function(id) {
        document.getElementById("emptyHeart" + id).src = 'static/icons/FullHeartRed.png'
        document.getElementById("emptyHeart" + id).id = 'fullHeart'
    };

    $scope.reloadRoute = function($scope) {
        $route.reload()
    }

    $scope.load = function() {
        activePhotos.async().then(function(d) {
            $scope.photos = d;
        }).then(function(d) {
            angular.forEach($scope.photos, function(item) {
                item.loadHeart = {};
                if (item.voted) {
                    item.loadHeart.id = "fullHeart";
                    item.loadHeart.src = "static/icons/FullHeartRed.png";
                    item.isClicked = true;

                } else {
                    item.loadHeart.id = ("emptyHeart" + item.id);
                    item.loadHeart.src = "static/icons/EmptyHeartRed.png";
                }
            })
        })
        activeCampaign.async().then(function(d) {
            $scope.campaign = d;
        })
    }

    $scope.selectedFilter = 'newest';
    $scope.setSelectedFilter = function(selectedFilter) {
        $scope.selectedFilter = selectedFilter;
    }
    $scope.load()
}])

.controller('GalleryCtrl', ['$scope', 'inactivePhotos', '$route', function($scope, inactivePhotos, $route) {
    $scope.sortType = 'id'; // set the default sort type
    $scope.sortReverse = true; // set the default sort order
    $scope.filterOptions = {
        opts: [{
            id: 2,
            name: 'Campaigns',
            campaign: 'All'
        }]
    };
    $scope.filterItem = {
        opt: $scope.filterOptions.opts[0]
    }
    $scope.customFilter = function(data) {
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
            angular.forEach($scope.photos, function(item) {
                if ($scope.filterOptions.opts.indexOf(item.campaign) == -1) {
                    $scope.filterOptions.opts.push({
                        name: item.campaign,
                        campaign: item.campaign
                    }, item.campaign)
                }
            });
            angular.forEach($scope.filterOptions.opts, function(item, key) {
                if (item.name == undefined) {
                    $scope.filterOptions.opts.splice(key, 1)
                }
            })
        });
    }
    $scope.selectedFilter = 'newest';
    $scope.setSelectedFilter = function(selectedFilter) {
        $scope.selectedFilter = selectedFilter;
    }
    $scope.load()
}])

.controller('SubmitCtrl', ['$scope', '$http', 'activeCampaign', function($scope, $http, activeCampaign) {
    $scope.cropper = {};
    $scope.cropper.sourceImage = null;
    $scope.cropper.croppedImage = null;
    $scope.bounds = {};
    $scope.bounds.left = 0;
    $scope.bounds.right = 0;
    $scope.bounds.top = 0;
    $scope.bounds.bottom = 0;
    $scope.uploadPhoto = function(element) {
        var reader = new FileReader();
        reader.onload = $scope.imageIsLoaded;
        reader.readAsDataURL(element.files[0]);
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
            var params = {
                'name': data.first_name,
                'email': data.email,
                'image': $scope.cropper.croppedImage
            };
            $http.post(window.location.protocol + '//' + window.location.host + '/api/images/',
                params
            )
            .success(function(data) {
                })
                .error(function(data) {
                });
            $scope.finish();
        } else {
            $scope.submit_info.submitted = true;
        }
    }
    $scope.load = function() {
        activeCampaign.async().then(function(d) {
            $scope.campaign = d;
        })
    }
    $scope.load();
}])

.controller('AboutCtrl', ['$scope', 'winningPhotos', function($scope, winningPhotos) {
    $scope.sortType = 'id'; // set the default sort type
    $scope.sortReverse = true; // set the default sort order
    $scope.load = function() {
        winningPhotos.async().then(function(d) {
            $scope.photos = d;
            photo = $scope.photos[d.length - 1]
            photo.newId = "winning-icon"
            photo.newSrc = "static/icons/winner-ribbon7.png"
        });
    }
    $scope.load()

}]);
