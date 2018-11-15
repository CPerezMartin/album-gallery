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
    vm.photo = '';


    vm.$onInit = function () {

      var stateParams = $gallerySrv.getStateParams();
      $gallerySrv.getPhotos(stateParams.albumId).then(
        data => vm.photos = data
      )

      //  vm.encodePhotoList = function (list) {
      //   let output = {};
      //   for (item in list) {
      //     output = item;
      //     output.url = encodeURL(item.url);
      //     vm.encodePhotoList.push(output);
      //   }
      // }
    }
  }
]);