'use strict';

/* App Module */

var productApp = angular.module('productApp', [
  'ngRoute',
  'productAnimations',

  'productControllers',
  'productFilters',
  'productServices'
]);

productApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/products', {
        templateUrl: 'partials/list.html',
        controller: 'ProductListCtrl'
      }).
      when('/products/:productId', {
        templateUrl: 'partials/detail.html',
        controller: 'ProductDetailCtrl'
      }).
      otherwise({
        redirectTo: '/products'
      });
  }]);
