'use strict';

var phoneList = angular.module('phoneList', []);

phoneList.component('phoneList', {
  templateUrl: 'phone-list-template',
  controller: [
    '$http',
    function($http) {
      var self = this;
      self.query = "";
      self.sort = "name";
      $http.get('phones.json').then(function(response) {
        self.phones = response.data;
      });
  }],
});
