Meteor.startup(function() {
  if(Restaurants.find().count() === 0) {
    var restaurants = [
      {
        'name': 'Little Bahn Mi Foo Foo',
        'description': 'The best Bahn Mi for hopping through the forest.',
        'food': [{'name': 'Chicken Bahn Mi', 'price': '5.00'}, {'name': 'Pork Bahn Mi', 'price': '5.00'}, {'name': 'Tofu Bahn Mi', 'price': '6.00'}, {'name': 'Kobe Beef Bahn Mi', 'price': '14.00'}]
      },
      {
        'name': 'The Gut Punch',
        'description': 'Let our food punch you in the gut, not the wallet.',
        'food': [{'name': 'Bacon Wrapped Pizza', 'price': '15.00'}, {'name': 'Deep Fried Chocolate Bar', 'price': '3.00'}, {'name': 'The Luther Burger', 'price': '8.00'}, {'name': 'The Sandwich That Shall Not Be Named', 'price': '14.00'}]
      },
      {
        'name': 'Slop Troff',
        'description': 'One bowl, One Hundred things to put in it.',
        'food': [{'name': 'Biscuits and Gravy Bowl', 'price': '7.00'}, {'name': 'Mashed Potatoes and Corn with Sour Cream and Chives', 'price': '7.00'}, {'name': 'Chicken Tikka Misala in a Bowl', 'price': '6.00'}, {'name': 'Tater Tots and Mac & Cheese in a bowl', 'price': '6.00'}]
      },
      {
        'name': 'On Tapas The World',
        'description': 'Try the best tapas on campus',
        'food': [{'name': 'Garlic Shrimp with Olive Oil', 'price': '12.00'}, {'name': 'Braised Chorizo', 'price': '12.00'}, {'name': 'Stuffed Mushrooms', 'price': '8.00'}, {'name': 'Pan Tomato', 'price': '8.00'}]
      }
    ];

    for (var i = 0; i < restaurants.length; i++) {
      Restaurants.insert(restaurants[i]);
    }
  }
});
