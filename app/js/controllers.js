'use strict';

/* Controllers */

var productControllers = angular.module('productControllers', []);

productControllers.controller('ProductListCtrl', ['$scope', 'Product',
  function($scope, Product) {
    $scope.products = Product.query();

    //mark overdue tasks
    $scope.overdue = function(due, status) {
      var now = new Date();
      var parsed = Date.parse(now);
      if (due < parsed && status != "Complete") {
        return status = "OVERDUE";
      } else {
        return status
      }
    };

    //pivot columns and rows
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

