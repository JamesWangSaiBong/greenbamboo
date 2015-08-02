'use strict'

app.factory('OrderItem', function() {
	function OrderItem(menuItem) {
		this.menuId = menuItem.id;
		this.enName = menuItem.enName;
		this.price = menuItem.price;
		this.quantity = 1
	}
	
	return OrderItem;
})