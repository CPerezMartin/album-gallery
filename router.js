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
    name: "album",
    url: "/album",
    views: {
      content: {
        templateUrl: "./states/album/album.html"
      }
    }
  };

  $stateProvider
    .state(homeState)
    .state(albumState);
  $urlRouterProvider.otherwise("/home");
});
