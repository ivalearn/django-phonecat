'use strict';

angular
  .module('phoneListModule', ['phoneServiceModule'])
  .component('phoneList', {
    templateUrl: 'phone-list-template',
    controller: ['phoneService', function(phoneService) {
      var self = this;
      self.query = "";
      self.sort = "name";
      self.phones = phoneService.query();
    }],
  });
