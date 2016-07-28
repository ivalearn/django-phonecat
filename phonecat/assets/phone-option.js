'use strict';
import angular from 'angular';

angular
  .module('phoneDetailModule')
  .component('phoneOption', {
    bindings: {
      name: '<',
      value: '<',
      level: '<',
    },
    templateUrl: 'phone-option-template',
    controller: function() {
      this.level = this.level || 2;
      this.name = this.name.charAt(0).toUpperCase() + this.name.substring(1)
      this.type = angular.isArray(this.value) ? 'array' : typeof this.value;
    }
  });
