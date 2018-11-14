'use strict';
app.controller('photoCtrl', [
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
    vm.photo ='';
   

    vm.$onInit = function(){

      console.log('álbum controller iniciado');
      // vm.id = sessionStorage.getItem('photo');
      vm.id = $gallerySrv.getStateParams();
      $gallerySrv.getphotos(vm.id).then(
        data => vm.photos = data
      );
    }

  }]);