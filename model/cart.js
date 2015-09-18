Cart = new Mongo.Collection('cart');

Cart.allow({
	insert: function(userId, food) {
		// do stuff
	},
	update: function(userId, food) {
		// do stuff
	},
	remove: function(userId, food) {
		// do stuff
	}
});