'use strict'

app.service('Order', function(Menu, OrderItem) {
	
	this.items = [];
	
	var that = this;
	
	function _searchItemById(id) {
		for(var i=0; i<that.items.length; i++) {
			if(that.items[i].menuId === id) {
				return that.items[i];
			}
		}
	}
	
	this.addItem = function(menuItem) {
		for(var i=0; i<this.items.length; i++) {
			if(this.items[i].menuId === menuItem.id) {
				return;
			}
		};
		menuItem.addToOrder();
		this.items.push(new OrderItem(menuItem));
	};
	
	
	this.incrementItemQuantity = function(menuItem) {
		var orderItem = _searchItemById(menuItem.id);
		if(orderItem) {
			 orderItem.incrementQuantity();
		}
	}
	
	this.dropItem = function(orderItem) {
		var i = this.items.indexOf(orderItem);
		if(i>-1) {
			this.items.splice(i,1);
			Menu.dropItemFromOrder(orderItem);
		}
	};
});