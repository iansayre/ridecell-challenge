  angular.module('foodApp').controller('CheckoutScreenCtrl', ['$scope', '$stateParams', function($scope, $stateParams, $rootScope){
    $scope.$on('orderPlaced', function(event, cart, pickupTime, customer) {
    	$scope.order = cart;
    	$scope.pickupTime = pickupTime;
    	$scope.customer = customer;

    	var totalSum = [];
    	$scope.total = 0;
    	for(var i = 0; i < $scope.order.length; i++){
    		total.push($scope.order[i].price);
    	}
    	for(var n = 0; n < totalSum.length; n++){
    		$scope.total += totalSum[i];
    	}

    });
  }]);