'use strict';
app.service('$gallerySrv', [
  '$q', '$http',
  function ($q, $http) {

    var vm = this;

    vm.getUsers = function () {
      console.log('retrieving users');
      const url = 'http://jsonplaceholder.typicode.com/users';

      return $q(function (resolve, reject) {
        $http.get(url).success(function (data) {

          if (data) {
            resolve(data);
          } else {
            reject('error');
          }
        });        
      })
    }

    vm.getAlbums = function (id) {
      console.log('retrieving users');
      const url = 'http://jsonplaceholder.typicode.com/albums?';

      return $q(function (resolve, reject) {
        $http.get(url,{params:{userId:id}}).success(function (data) {

          if (data) {
            resolve(data);
          } else {
            reject('error');
          }
        });        
      })
    }

    vm.getPhotos = function (albumId) {
      console.log('retrieving users');
      const url = 'http://jsonplaceholder.typicode.com/photos?';

      return $q(function (resolve, reject) {
        $http.get(url,albumId).success(function (data) {

          if (data) {
            resolve(data);
          } else {
            reject('error');
          }
        });        
      })
    }

    vm.getStateParams = function(){return this.stateParams};

  }
]);