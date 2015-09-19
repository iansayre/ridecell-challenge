angular.module('foodApp').controller('MenuCtrl', ['$scope', '$stateParams', '$meteor', '$rootScope', 'OrderService', function($scope, $stateParams, $meteor, $rootScope, OrderService){
	$scope.restaurant = $meteor.object(Restaurants, $stateParams.restaurantId, false);

	var cart = [],
		errorAlert = document.getElementsByClassName('alert-danger')[0],
		successAlert = document.getElementsByClassName('alert-success')[0];

	$scope.addToCart = function() {
		errorAlert.style.display = 'none';
		successAlert.style.display = 'none';

		if( $rootScope.currentUser !== null ){

			var cartItem = {},
				cartBadge = document.getElementsByClassName('cart-badge')[0],
				item = this.food.name,
				qty = document.getElementById(item + '-qty').value,
				price = this.food.price;


			if( qty > 0 ) {
				cartItem.item = item;
				cartItem.qty = qty;
				cartItem.price = Number(price * qty);
				cart.push(cartItem);

				cartBadge.innerHTML = Number(cartBadge.innerHTML) + Number(qty);
				successAlert.innerHTML = 'You placed this item in the cart';
				successAlert.style.display = 'block';
			}
			else {
				errorAlert.innerHTML = "You can't order zero foods";
				errorAlert.style.display = 'block';
			}
		}
		else {
			 errorAlert.innerHTML = 'You must be logged in to place an order';
			errorAlert.style.display = 'block';
		}
	};

	$scope.placeOrder = function() {
		errorAlert.style.display = 'none';
		successAlert.style.display = 'none';

		if( $rootScope.currentUser !== null ) {
			var pickupTime = document.getElementById('timeSelect').value;

			if( pickupTime !== "" && cart.length !== 0 ) {
				OrderService.setFoodOrder(cart);
				OrderService.setCustomer($rootScope.currentUser._id);
				OrderService.setPickupTime(pickupTime);
				console.log(cart);
				console.log('pickup time: ' + pickupTime);
				console.log('currentUser! ' + $rootScope.currentUser._id);

				successAlert.innerHTML = 'Your order has been placed.';
				successAlert.style.display = 'block';
			}
			else {
				errorAlert.innerHTML = 'You must choose a pickup time before submitting an order.';
				errorAlert.style.display = 'block';
			}
		}
	};
}]);
