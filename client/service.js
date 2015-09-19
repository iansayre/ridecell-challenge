angular.module('foodApp').service('OrderService', function() {
	var order,customer, pickupTime = "";

	return {
		getFoodOrder: function(){
			return order;
		},
		getCustomer: function(){
			return customer;
		},
		getPickupTime: function() {
			return pickupTime;
		},
		setFoodOrder: function(value) {
			order = value;
			console.log('Order set: ' + order);
		},
		setCustomer: function(value) {
			customer = value;
			console.log('customer set: ' + customer);
		},
		setPickupTime: function(value) {
			pickupTime = value;
			console.log('time set ' + pickupTime);
		}
	};
});