webpackJsonp([1,0],[function(e,t,o){"use strict";window.jQuery=o(15),o(11),o(12),o(2),o(4),o(3),o(5),o(6),o(10),o(8),o(14),o(7),o(13),o(9)},,,,,,function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=o(1),r=n(i),u=r["default"].module("phoneApp",["ui.router","phoneListModule","phoneDetailModule","ngAnimate"]);u.config(["$stateProvider","$urlRouterProvider",function(e,t){t.otherwise("/list"),e.state("phone_list",{url:"/list",template:"<phone-list></phone-list>"}).state("phone_detail",{url:"/phone/{id:int}",template:'<phone-detail id="id"></phone-detail>',controller:["$scope","$stateParams",function(e,t){e.id=t.id}]})}])},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=o(1),r=n(i);r["default"].module("phoneDetailModule",["phoneServiceModule"]).component("phoneDetail",{bindings:{id:"<"},templateUrl:"phone-detail-template",controller:["phoneService",function(e){var t=this,o=e.get({id:this.id},function(){t.data=o,t.images=o.images.map(function(e){return{src:e,hover:!1}}),t.image=t.images[0].src,t.props=o.json_props,t.description=t.props.description,delete t.props.description})}]})},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=o(1),r=n(i);r["default"].module("phoneListModule",["phoneServiceModule"]).component("phoneList",{templateUrl:"phone-list-template",controller:["phoneService",function(e){this.query="",this.sort="name",this.phones=e.query()}]})},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},r=o(1),u=n(r);u["default"].module("phoneDetailModule").component("phoneOption",{bindings:{name:"<",value:"<",level:"<"},templateUrl:"phone-option-template",controller:function(){this.level=this.level||2,this.name=this.name.charAt(0).toUpperCase()+this.name.substring(1),this.type=u["default"].isArray(this.value)?"array":i(this.value)}})},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=o(1),r=n(i);r["default"].module("phoneServiceModule",["ngResource"]).factory("phoneService",["$resource",function(e){return e("phones/:id.json")}])},,,function(e,t){},13]);