'use strict';
import angular from 'angular';

var phoneApp = angular.module('phoneApp', [
  'phoneListModule',
  'phoneDetailModule',
  'ngAnimate',
  'ngRoute',
]);

phoneApp.config([
  '$routeProvider',
  ($routeProvider) => {
    $routeProvider
      .when('/phones', {
        template: '<phone-list></phone-list>'
      })
      .when('/phone/:id', {
        template: '<phone-detail id="+$resolve.p.id"></phone-detail>',
        resolve: { 'p': '$routeParams' },
      })
      .otherwise('/phones');
  }
]);
