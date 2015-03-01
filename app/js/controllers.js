'use strict';

/* Controllers */

var productControllers = angular.module('productControllers', []);

productControllers.controller('ProductListCtrl', ['$scope', 'Product',
  function($scope, Product) {
    $scope.products = Product.query();
    $scope.orderProp = 'name';
    $(".reverse").click(function(){
      $("table").each(function() {
        var $this = $(this);
        var newrows = [];
        $this.find("tr").each(function(){
          var i = 0;
          $(this).find("td").each(function(){
            i++;
            if(newrows[i] === undefined) { newrows[i] = $("<tr></tr>"); }
            newrows[i].append($(this));
          });
        });
        $this.find("tr").remove();
        $.each(newrows, function(){
          $this.append(this);
        });
      });  
      return false;
    });
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
