angular.module('foodApp').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
function($urlRouterProvider, $stateProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$stateProvider
		.state('restaurants', {
				url: '/restaurants',
				templateUrl: 'client/restaurants/views/restaurant-list.ng.html',
				controller: 'RestaurantListCtrl'
		})
		.state('restaurantMenu', {
				url: '/restaurants/:restaurantId',
				templateUrl: 'client/restaurants/views/restaurant-menu.ng.html',
				controller: 'MenuCtrl'
		})
		.state('checkout', {
				url: '/checkout',
				templateUrl: 'client/restaurants/views/checkout.ng.html',
				controller: 'CheckoutScreenCtrl'
		});

	$urlRouterProvider.otherwise('/restaurants');
}]);