'use strict';
app.controller('albumCtrl', [
  '$scope',
  '$rootScope',
  '$state',
  '$gallerySrv',
  '$http',
  function (
    $scope,
    $rootScope,
    $state,
    $gallerySrv,
    $http
  ) {

    var vm = this;
    vm.users = {};

    vm.$onInit = function(){

      console.log('álbum controller iniciado');
      // $gallerySrv.getUsers().then(
      //   data => vm.users = data
      // );
    }

  }]);