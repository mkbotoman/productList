'use strict';

/* Filters */

angular.module('productFilters', []).filter('overdue', function() {
  return function(input) {
  	var now = new Date();
  	var parsed = Date.parse(now);
  	if (now > input) {
    	return input ? '\u2713' : '\u2718';
    } else {
    	return input;
    }
  };
});
