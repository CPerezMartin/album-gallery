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
  }
]);