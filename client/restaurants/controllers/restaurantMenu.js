angular.module('foodApp').controller('MenuCtrl', ['$scope', '$stateParams', '$meteor', function($scope, $stateParams, $meteor){
  $scope.restaurant = $meteor.object(Restaurants, $stateParams.restaurantId, false);

  var cart = [];

  $scope.addToCart = function() {
    var cartItem = {},
        item = this.food.name,
        qty = document.getElementById(item + '-qty').value,
        price = this.food.price;


        if( qty > 0 ) {
          cartItem.item = item;
          cartItem.qty = qty;
          cartItem.price = Number(price);
          cart.push(cartItem);
        }
        else {
          alert("You can't order zero foods");
        }

        console.log('ITEM: ' + item);
        console.log('QTY ' + qty);
        console.log('price ' + price);

        console.log(cart);
  };
}]);
