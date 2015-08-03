'use strict'

app.factory('OrderItem', function() {
	function OrderItem(menuItem) {
		this.menuId = menuItem.id;
		this.enName = menuItem.enName;
		this.price = menuItem.price;
		this.quantity = 1
	};
	
	OrderItem.prototype.getQuantity = function() {
		return this.quantity;
	}
	
	return OrderItem;
});