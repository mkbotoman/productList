'use strict';

/* Controllers */

var productControllers = angular.module('productControllers', []);

productControllers.controller('ProductListCtrl', ['$scope', 'Product',
  function($scope, Product) {
    //$scope.products = Product.query();
    //$scope.orderProp = 'age';
  }]);

productControllers.controller('ProductDetailCtrl', ['$scope', '$routeParams', 'Product',
  function($scope, $routeParams, Product) {
    $scope.product = Product.get({productId: $routeParams.productId}, function(product) {
      $scope.mainImageUrl = product.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
