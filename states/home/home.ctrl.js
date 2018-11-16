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
      $gallerySrv.getUsers().then(
        data => vm.users = data
      );
    }

    vm.goToAlbum = function(id){
      sessionStorage.setItem('album',id);
      $state.go("albumState");

    }


  }]);