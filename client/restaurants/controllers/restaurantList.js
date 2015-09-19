
  angular.module('foodApp').controller('RestaurantListCtrl', ['$scope', '$meteor', function($scope, $meteor) {
    $scope.restaurants = $meteor.collection(Restaurants);
  }]);