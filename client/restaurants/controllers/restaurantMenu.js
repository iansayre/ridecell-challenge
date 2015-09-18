  angular.module('foodApp').controller('MenuCtrl', ['$scope', '$stateParams', '$meteor', function($scope, $stateParams, $meteor){
    $scope.restaurant = $meteor.object(Restaurants, $stateParams.restaurantId, false);

    console.log($scope.restaurant.food);
  }]);