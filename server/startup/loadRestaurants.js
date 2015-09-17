Meteor.startup(function() {
  if(Restaurants.find().count() === 0) {
    var restaurants = [
      {
        'name': 'Little Bahn Mi Foo Foo',
        'description': 'The best Bahn Mi for hopping through the forest.'
      },
      {
        'name': 'The Gut Punch',
        'description': 'Let our food punch you in the gut, not the wallet.'
      },
      {
        'name': 'Slop Troff',
        'description': 'One bowl, One Hundred things to put in it.'
      },
      {
        'name': 'On Tapas The World',
        'description': 'Try the best tapas on campus'
      }
    ];

    for (var i = 0; i < restaurants.length; i++) {
      Restaurants.insert(restaurants[i]);
    }
  }
});
