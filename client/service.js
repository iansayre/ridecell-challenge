angular.module('foodApp').service('OrderService', function() {
	var order = {},
		customer, pickupTime = "";

	return {
		getOrder: function(){
			return order;
		},
		getCustomer: function(){
			return customer;
		},
		getPickupTime: function() {
			return pickupTime;
		},
		setOrder: function(value) {
			order = value;
		},
		setCustomer: function(value) {
			customer = value;
		},
		setPickupTime: function(value) {
			pickupTime = value;
		}
	};
});