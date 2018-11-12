'use strict';
app.controller('homeCtrl', [
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
      console.log('home cargado');
      $gallerySrv.getUsers().then(
        data => vm.users = data
      );

    }


  }]);