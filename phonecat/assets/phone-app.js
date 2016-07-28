'use strict';
import angular from 'angular';

var phoneApp = angular.module('phoneApp', [
  'ui.router',
  'phoneListModule',
  'phoneDetailModule',
  'ngAnimate',
]);

phoneApp.config([
  '$stateProvider', '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/list');
    $stateProvider
      .state('phone_list', {
        url: '/list',
        template: '<phone-list></phone-list>',
      })
      .state('phone_detail', {
        url: '/phone/{id:int}',
        template: '<phone-detail id="id"></phone-detail>',
        controller: [
          '$scope', '$stateParams',
          function($scope, $stateParams) {
            $scope.id = $stateParams.id;
        }]
      });
  }
]);
