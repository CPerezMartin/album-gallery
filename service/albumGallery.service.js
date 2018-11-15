'use strict';
app.service('$gallerySrv', [
  '$q', '$http',
  function ($q, $http) {

    var vm = this;

    vm.stateParams = {};


    vm.setStateParams = function (params) {
      vm.stateParams = params;
      console.log('stateParams: ', vm.stateParams);
    }

    vm.getStateParams = function () {
      return vm.setStateParams
    };


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

    vm.getAlbums = function(id) {
      const url = 'http://jsonplaceholder.typicode.com/albums?';

      return $q(function (resolve, reject) {
        $http.get(url, {
          params: {
            userId: id
          }
        }).success(function (data) {

          if (data) {
            resolve(data);
          } else {
            reject('error');
          }
        });
      })
    }

    vm.getPhotos = function(id) {
      const url = 'http://jsonplaceholder.typicode.com/photos?';

      return $q(function (resolve, reject) {
        $http.get(url, {
          params: {
            albumId: id
          }
        }).success(function (data) {

          if (data) {
            // let output = [];
            // let item = {};
            // let x = {};
            // data.forEach(item => {
            //   x.id = item.id;
            //   x.albumId = item.albumId;
            //   x.title = item.title,
            //   x.thumbnailUrl = item.thumbnailUrl;
            //   x.url = new URL(item.url);
            //   output.push(x);
            // });
            
              resolve(data)
            
          } else {
            reject('error');
          }
        });
      })
    }

    vm.getStateParams = function () {
      return this.stateParams
    };



  }
]);