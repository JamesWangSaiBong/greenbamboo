'use strict'

app.factory('OrderItem', function() {
	function OrderItem(menuItem) {
		this.menuId = menuItem.id;
		this.enName = menuItem.enName;
		this.type = menuItem.type;
		this.price = menuItem.price;
		this.quantity = 1
	};
	
	OrderItem.prototype.getQuantity = function() {
		return this.quantity;
	}
	
	OrderItem.prototype.incrementQuantity = function() {
		this.quantity++;
	}
	
	OrderItem.prototype.decrementQuantity = function() {
		this.quantity--;
	}
	
	return OrderItem;
});