'use strict';
console.log("router cargado");
app.config(function($stateProvider, $urlRouterProvider) {

  var homeState = {
    name: "home",
    url: "/home",
    views: {
      content: {
        templateUrl: "./states/home/home.html"
      }
    } //views
  };
  
  $stateProvider.state(homeState);
  $urlRouterProvider.otherwise("/home");
});