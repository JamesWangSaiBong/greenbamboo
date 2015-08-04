'use strict'

app.factory('MenuItem', function() {
	function MenuItem(item) {
		this.id = item.id;
		this.enName = item.en_name;
		this.price = item.price;
		this.orderQuantity = 0;
		this.isSelected = false;
	};
	
	MenuItem.prototype.addToOrder = function() {
		this.orderQuantity = 1;
		this.isSelected = true;
	};
	
	MenuItem.prototype.dropFromOrder = function() {
		this.orderQuantity = 0;
		this.isSelected = false;
	};
	
	MenuItem.prototype.incrementOrderQuantity = function() {
		this.orderQuantity++;
	};
	
	MenuItem.prototype.decrementOrderQuantity = function() {
		this.orderQuantity--;
	}
	
	return MenuItem;
});