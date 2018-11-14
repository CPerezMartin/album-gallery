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
    vm.albums = {}

    this.stateParams = null;
   

    vm.$onInit = function(){

      console.log('álbum controller iniciado');
      vm.id = sessionStorage.getItem('album');
      $gallerySrv.getAlbums(vm.id).then(
        data => vm.albums = data
      );
    }

    vm.goToPhoto = function(id){
      sessionStorage.setItem('photo',id);
      this.stateParams = id;
      $state.go("PhotoState");

    }

  }]);