'use strict';
import angular from 'angular';

angular
  .module('phoneListModule', ['phoneServiceModule'])
  .component('phoneList', {
    templateUrl: 'phone-list-template',
    controller: ['phoneService', function(phoneService) {
      this.query = "";
      this.sort = "name";
      this.phones = phoneService.query();
    }],
  });
