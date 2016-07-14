'use strict';

var phoneDetail = angular.module('phoneDetail', []);

phoneDetail.component('phoneDetail', {
  bindings: {'id': '<'},
  templateUrl: 'phone-detail-template',
  controller: ['$http', function($http) {
    var self = this;
    $http.get('phones/' + self.id + '.json')
      .then(function(response) {
        self.data = response.data;
        self.images = []
        for (var i = 0; i < 5; i++)
          self.images.push({ src: self.data.images[i], hover: false });
        self.image = self.images[0].src;
        self.props = self.data.json_props;
        self.description = self.props.description
        delete self.props.description;
        for (var key in self.props) {
          if (self.props.hasOwnProperty(key)) {
            var val = self.props[key];
            console.log(val);
            console.log(typeof val);
            console.log(Array.isArray(val))
            if (Array.isArray(val)) {
              for(var i = 0; i < val.length; i++)
                console.log('-- ' + val[i]);
            }
          }
        }
    })
  }],
});
