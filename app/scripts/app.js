'use strict';

/**
 * @ngdoc overview
 * @name hrprepApp
 * @description
 * # hrprepApp
 *
 * Main module of the application.
 */
angular
  .module('hrprepApp', [
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
