'use strict';

angular
  .module('phoneServiceModule', ['ngResource'])
  .factory('phoneService', [
    '$resource', function($resource) {
      return $resource('phones/:id.json');
    }
  ]);
