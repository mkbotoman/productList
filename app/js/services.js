'use strict';

/* Services */

var productServices = angular.module('productServices', ['ngResource']);

productServices.factory('Product', ['$resource',
  function($resource){
    return $resource('products/:productId.json', {}, {
      query: {method:'GET', params:{productId:'products'}, isArray:true}
    });
  }]);
