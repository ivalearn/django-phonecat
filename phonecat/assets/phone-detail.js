'use strict';
import angular from 'angular';

angular
  .module('phoneDetailModule', ['phoneServiceModule'])
  .component('phoneDetail', {
    bindings: {'id': '<'},
    templateUrl: 'phone-detail-template',
    controller: ['phoneService', function(phoneService) {
      var data = phoneService.get({id: this.id}, () => {
        this.data = data;
        this.images = data.images.map((src) => ({src, hover: false}));
        this.image = this.images[0].src;
        this.props = data.json_props;
        this.description = this.props.description
        delete this.props.description;
      })
    }],
  });
