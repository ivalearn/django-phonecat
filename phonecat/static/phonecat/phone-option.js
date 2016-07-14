'use strict';

angular
  .module('phoneDetail')
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
      this.type = Array.isArray(this.value) ? 'array' : typeof this.value;
    }
  });
