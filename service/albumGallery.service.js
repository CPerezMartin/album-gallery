'use strict';
app.service('$gallerySrv', [
  '$q', '$http',
  function ($q, $http) {

    var vm = this;

    vm.stateParams = {};

    /**
     * @description set params in custom 'stateParams' service
     * @param JSON object with key:value to save in stateparams
     * @return nothing. Objects are keep in vm.stateParams at gallerySrv
     */
    vm.setStateParams = function (params) {
      vm.stateParams = params;
      console.log('stateParams: ', vm.stateParams);
    }

    /**
     * @description retrieve objects in gallerySrv stateParmas
     * @return all data in stateParams. It should be JSON objects
     */
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

    vm.getAlbums = function (id) {
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

    vm.getPhotos = function (id) {
      const url = 'http://jsonplaceholder.typicode.com/photos?';

      return $q(function (resolve, reject) {
        $http.get(url, {
          params: {
            albumId: id
          }
        }).success(function (data) {

          if (data) {

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