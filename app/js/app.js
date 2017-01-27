'use strict';

// Declare app level module which depends on views, and components
angular.module('f1_feeder', [
  'f1_feeder.controllers',
  'f1_feeder.services',
  'ngRoute'
])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when("/drivers", { templateUrl: "view/drivers.html", controller: "driversController" })
                  .when("/drivers/:id", { templateUrl: "view/driver.html", controller: "driverController" })
                  .otherwise({redirectTo: '/drivers'});
  }]);;
