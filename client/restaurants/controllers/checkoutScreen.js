angular.module('foodApp').controller('CheckoutScreenCtrl', ['$scope', '$stateParams', '$rootScope', 'OrderService', function($scope, $stateParams, $rootScope, OrderService){

	$scope.$watch(function() { return OrderService.getFoodOrder(); }, function(orderVal, oldVal){
		if(orderVal !== []){
			$scope.order = orderVal;

			var totalSum = [];
			$scope.total = 0;

			for(var i = 0; i < $scope.order.length; i++){
				total.push($scope.order[i].price);
			}

			for(var n = 0; n < totalSum.length; n++){
				$scope.total += totalSum[i];
			}
		}
	}, true);

	$scope.$watch(function() { return OrderService.getCustomer(); }, function(customerVal, oldVal){
		if(customerVal !== ""){
			$scope.customer = customerVal;
		}
	}, true);

	$scope.$watch(function() { return OrderService.getPickupTime(); }, function(pTimeVal, oldVal){
		if(pTimeVal !== ""){
			$scope.pickupTime = pTimeVal;
		}
	}, true);

}]);