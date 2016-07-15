'use strict';

angular
  .module('phoneDetailModule', ['phoneServiceModule'])
  .component('phoneDetail', {
    bindings: {'id': '<'},
    templateUrl: 'phone-detail-template',
    controller: ['phoneService', function(phoneService) {
      var self = this;
      var data = phoneService.get({id: self.id}, function() {
        self.data = data;
        self.images = data.images.map(function(src) { return {src: src, hover: false}; });
        self.image = self.images[0].src;
        self.props = data.json_props;
        self.description = self.props.description
        delete self.props.description;
      })
    }],
  });
