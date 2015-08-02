'use strict'

app.factory('MenuItem', function() {
	function MenuItem(item) {
		this.id = item.id;
		this.enName = item.en_name;
		this.price = item.price;
	};
	
	MenuItem.prototype.addToOrder = function(item) {
		var orderItem = {
			enName: item.enName,
			price: item.price
		};
		return orderItem;
	};
	
	return MenuItem;
});