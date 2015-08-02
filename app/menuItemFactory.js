'use strict'

app.factory('MenuItem', function() {
	function MenuItem(item) {
		this.id = item.id;
		this.enName = item.en_name;
		this.price = item.price;
		this.isSelected = false;
	};
	
	MenuItem.prototype.addToOrder = function() {
		this.isSelected = true;
	};
	
	MenuItem.prototype.dropFromOrder = function() {
		this.isSelected = false;
	}
	
	return MenuItem;
});