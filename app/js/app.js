'use strict';

/* App Module */

var productApp = angular.module('productApp', [
  'ngRoute',
  'productControllers',
  'productServices'
]);

productApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/products', {
        templateUrl: 'partials/list.html',
        controller: 'ProductListCtrl'
      }).
      otherwise({
        redirectTo: '/products'
    });
}]);
