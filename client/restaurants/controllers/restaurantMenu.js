  angular.module('foodApp').controller('MenuCtrl', ['$scope', '$stateParams', '$meteor', function($scope, $stateParams, $meteor){
    $scope.restaurant = $meteor.object(Restaurants, $stateParams.restaurantId, false);

    $scope.cart = $meteor.collection(Cart);
  }]);