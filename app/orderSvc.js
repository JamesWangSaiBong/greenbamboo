'use strict'

app.service('Order', function(Menu, OrderItem) {
	this.items = [];
	
	this.addItem = function(menuItem) {
		for(var i=0; i<this.items.length; i++) {
			if(this.items[i].menuId === menuItem.id) {
				return;
			}
		};
		menuItem.addToOrder();
		this.items.push(new OrderItem(menuItem));
	};
	
	this.dropItem = function(orderItem) {
		var i = this.items.indexOf(orderItem);
		if(i>-1) {
			this.items.splice(i,1);
			Menu.dropItemFromOrder(orderItem.menuId);
		}
	};
});