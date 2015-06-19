angular.module('myApp.services', [])

.factory('ActivePhotos', function($http) {

    // var photos = [
    //   {
    //   url: 'http://vignette4.wikia.nocookie.net/chroniclesofillusion/images/6/6a/Catdog.png/revision/latest?cb=20130709001316'
    // },
    // {
    //   url: 'http://merchantsmarthouston.com/wp-content/uploads/2013/01/hot_dog.jpg'
    // },
    // {
    //   url: 'http://vignette4.wikia.nocookie.net/chroniclesofillusion/images/6/6a/Catdog.png/revision/latest?cb=20130709001316'
    // },
    // {
    //   url: 'http://merchantsmarthouston.com/wp-content/uploads/2013/01/hot_dog.jpg'
    // }];



    var photos = $http.get('http://intern-cms-dev.elasticbeanstalk.com/api/images/').
      success(function(data, status, headers, config) {
        console.log('success')
        console.log(data)
        return data['objects']


      }).
      error(function(data, status, headers, config) {
        console.log('error')
        return status
      });


    return {
      all: function() {
          return photos;
      }
    };

})

.factory('InactivePhotos', function($http) {

    var photos = [
      {
      url: 'http://merchantsmarthouston.com/wp-content/uploads/2013/01/hot_dog.jpg'
    },
      {
      url: 'http://vignette4.wikia.nocookie.net/chroniclesofillusion/images/6/6a/Catdog.png/revision/latest?cb=20130709001316'
    },
      {
      url: 'http://merchantsmarthouston.com/wp-content/uploads/2013/01/hot_dog.jpg'
    },
      {
      url: 'http://vignette4.wikia.nocookie.net/chroniclesofillusion/images/6/6a/Catdog.png/revision/latest?cb=20130709001316'
    },
      {
      url: 'http://merchantsmarthouston.com/wp-content/uploads/2013/01/hot_dog.jpg'
    },
      {
      url: 'http://vignette4.wikia.nocookie.net/chroniclesofillusion/images/6/6a/Catdog.png/revision/latest?cb=20130709001316'
    },
      {
      url: 'http://merchantsmarthouston.com/wp-content/uploads/2013/01/hot_dog.jpg'
    },
      {
      url: 'http://vignette4.wikia.nocookie.net/chroniclesofillusion/images/6/6a/Catdog.png/revision/latest?cb=20130709001316'
    },
      {
      url: 'http://merchantsmarthouston.com/wp-content/uploads/2013/01/hot_dog.jpg'
    },
      {
      url: 'http://vignette4.wikia.nocookie.net/chroniclesofillusion/images/6/6a/Catdog.png/revision/latest?cb=20130709001316'
    },
      {
      url: 'http://merchantsmarthouston.com/wp-content/uploads/2013/01/hot_dog.jpg'
    },
      {
      url: 'http://vignette4.wikia.nocookie.net/chroniclesofillusion/images/6/6a/Catdog.png/revision/latest?cb=20130709001316'
    }
    ];

  //   $http.get('/someUrl').
  //     success(function(data, status, headers, config) {
  //
  //       photos.push(data)
  //
  //     }).
  //     error(function(data, status, headers, config) {
  //
  //     });

    return {
      all: function() {
          return photos;
      }
    };

});
