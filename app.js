'use strict';
console.log('Init app...');
var app = angular.module('albumGalleryApp',['ui.router'])
    .config(function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = true;
    });