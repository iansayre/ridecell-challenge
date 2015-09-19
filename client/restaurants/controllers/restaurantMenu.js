angular.module('foodApp').controller('MenuCtrl', ['$scope', '$stateParams', '$meteor', '$rootScope', 'OrderService', function($scope, $stateParams, $meteor, $rootScope, OrderService){
	$scope.restaurant = $meteor.object(Restaurants, $stateParams.restaurantId, false);

	var cart = [];

	$scope.addToCart = function() {
		if( $rootScope.currentUser !== null ){

			var cartItem = {},
				item = this.food.name,
				qty = document.getElementById(item + '-qty').value,
				price = this.food.price;


			if( qty > 0 ) {
				cartItem.item = item;
				cartItem.qty = qty;
				cartItem.price = Number(price * qty);
				cart.push(cartItem);
			}
			else {
				alert("You can't order zero foods");
			}
		}
		else {
			alert('You must be logged in to place an order');
		}
	};

	$scope.placeOrder = function() {
		if( $rootScope.currentUser !== null ) {
			var pickupTime = document.getElementById('timeSelect').value;

			if( pickupTime !== "" && cart.length !== 0 ) {
				OrderService.setFoodOrder(cart);
				OrderService.setCustomer($rootScope.currentUser._id);
				OrderService.setPickupTime(pickupTime);
				console.log(cart);
				console.log('pickup time: ' + pickupTime);
				console.log('currentUser! ' + $rootScope.currentUser._id);
			}
			else {
				alert('You must choose a pickup time before submitting an order.');
			}
		}
	};
}]);
