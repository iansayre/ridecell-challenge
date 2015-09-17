  angular.module('foodApp').controller('MenuCtrl', ['$scope', '$stateParams', function($scope, $stateParams){
    $scope.restaurantId = $stateParams.id;
  }]);