/*! Cofoundry 2020-06-22 */
angular.module("cms.setup",["ngRoute","cms.shared"]).constant("_",window._).constant("setup.modulePath","/Admin/Modules/Setup/Js/"),angular.module("cms.setup").config(["$routeProvider","shared.routingUtilities","setup.modulePath",function(a,b,c){a.otherwise(b.mapOptions(c,"SetupDetails"))}]),angular.module("cms.setup").factory("setup.setupService",["$http","shared.serviceBase",function(a,b){var c={},d=b+"setup";return c.run=function(b){return a.post(d,b)},c}]),angular.module("cms.setup").controller("SetupDetailsController",["_","$q","shared.LoadState","shared.urlLibrary","setup.setupService","setup.modulePath",function(a,b,c,d,e,f){function g(){j.save=h,j.doesPasswordMatch=i,j.urlLibrary=d,j.saveLoadState=new c,j.command={}}function h(){function a(){j.isSetupComplete=!0}j.saveLoadState.on(),e.run(j.command).then(a)["finally"](j.saveLoadState.off)}function i(a){return j.command?j.command.userPassword===a:!1}var j=this;g()}]);