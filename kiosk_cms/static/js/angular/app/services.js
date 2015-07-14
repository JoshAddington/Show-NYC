angular.module('myApp.services', [])

.factory('activePhotos', function($http) {

  var myService = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get('http://intern-cms-dev.elasticbeanstalk.com/api/images/active_campaigns').then(function (response) {
        // The then function here is an opportunity to modify the response
        // console.log(response.data);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller
      return promise;
    }
  }
  return myService;

  // active_campaign

})

.factory('activeCampaign', function($http){
  var myService = {
    async: function() {
      var promise = $http.get('http://intern-cms-dev.elasticbeanstalk.com/api/campaigns/active/').then(function (response){
        return response.data[0];
      });
      return promise;
    }
  } 
  return myService;
})

.factory('inactivePhotos', function($http) {

    var myService = {
      async: function() {
        // $http returns a promise, which has a then function, which also returns a promise
        var promise = $http.get('http://intern-cms-dev.elasticbeanstalk.com/api/images/inactive_campaigns/').then(function (response) {
          // The then function here is an opportunity to modify the response
          // console.log(response);
          // The return value gets picked up by the then in the controller.
          return response.data;
        });
        // Return the promise to the controller
        return promise;
      }
    }
    return myService;

    // inactive_campaigns

})

.factory('winningPhotos', function($http) {

    var myService = {
      async: function() {
        // $http returns a promise, which has a then function, which also returns a promise
        var promise = $http.get('http://intern-cms-dev.elasticbeanstalk.com/api/images/winners/').then(function (response) {
          // The then function here is an opportunity to modify the response
          // console.log(response);
          // The return value gets picked up by the then in the controller.
          return response.data;
        });
        // Return the promise to the controller
        return promise;
      }
    }
    return myService;

    // inactive_campaigns

})
