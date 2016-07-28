'use strict';
import angular from 'angular';

angular
  .module('phoneServiceModule', ['ngResource'])
  .factory('phoneService', [
    '$resource', ($resource) => $resource('phones/:id.json')
  ]);
