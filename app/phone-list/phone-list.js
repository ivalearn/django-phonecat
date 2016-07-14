'use strict';

angular.module('phoneList', []);

angular
  .module('phoneList')
  .component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: [
      '$http',
      function($http) {
      var self = this;
      $http.get('/phonecat/phones.json').then(function(response) {
        self.phones = response.data;
      });
    }],
  });
