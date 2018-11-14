"use strict";
console.log("router cargado");
app.config(function($stateProvider, $urlRouterProvider) {
  //views
  var homeState = {
    name: "home",
    url: "/home",
    views: {
      content: {
        templateUrl: "./states/home/home.html"
      }
    }
  };
  var albumState = {
    name: "albumState",
    url: "/album",
    views: {
      content: {
        templateUrl: "./states/album/album.html"
      }
    }
  };
  var photoState = {
    name: "photoState",
    url: "/photo",
    views: {
      content: {
        templateUrl: "./states/photo/photo.html"
      }
    }
  };

  $stateProvider
    .state(homeState)
    .state(albumState)
    .state(photoState);
  $urlRouterProvider.otherwise("/home");
});
