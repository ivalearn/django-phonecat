'use strict';

angular
  .module('phoneServiceModule', ['ngResource'])
  .factory('phoneService', [
    '$resource', ($resource) => $resource('phones/:id.json')
  ]);
