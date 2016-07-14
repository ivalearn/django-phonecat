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
        self.query = "";
        self.sort = "name";
        $http.get('phones.json').then(function(response) {
          self.phones = response.data;
        });
    }],
  });
