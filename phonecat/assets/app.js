// bootstrap.js requires global jQuery, but webpack would load it only on demand
window.jQuery = require('jquery/dist/jquery.js');

require('bootstrap/dist/js/bootstrap.js');
require('bootstrap/dist/css/bootstrap.css');

require('angular/angular.js');
require('angular-resource/angular-resource.js');
require('angular-animate/angular-animate.js');
require('angular-route/angular-route.js');

require('./phone-app.js');
require('./phone-service.js');

require('./phone-list.js');
require('./phone-list.scss');

require('./phone-detail.js');
require('./phone-detail.scss');
require('./phone-option.js');
