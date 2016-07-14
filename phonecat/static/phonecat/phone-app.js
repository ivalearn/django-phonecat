// app.js
'use strict';

var phoneApp = angular.module('phoneApp', [
  'ui.router',
  'phoneList',
]);

phoneApp.config([
  '$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/list');
    $stateProvider
      .state('list', {
        url: '/list',
        template: '<phone-list></phone-list>',
      });
  }
]);
