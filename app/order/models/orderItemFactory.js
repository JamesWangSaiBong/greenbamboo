'use strict'

app.factory('OrderItem', function() {
	function OrderItem(menuItem) {
		this.menuId = menuItem.id;
		this.enName = menuItem.enName;
		this.cnName = menuItem.cnName;
		this.type = menuItem.type;
		this.price = menuItem.price;
		this.quantity = 1
	};
	
	OrderItem.prototype.getName = function(lang) {
		switch (lang) {
			case 'cn':
				return this.cnName;
			case 'en':
				return this.enName;
		}
	}
	
	OrderItem.prototype.getQuantity = function() {
		return this.quantity;
	}
	
	OrderItem.prototype.incrementQuantity = function() {
		this.quantity++;
	}
	
	OrderItem.prototype.decrementQuantity = function() {
		this.quantity--;
	}
	
	OrderItem.prototype.getType = function() {
		return this.type;
	}
	
	OrderItem.prototype.getPrice = function() {
		return this.price;
	}
	
	OrderItem.prototype.getTax = function() {
		return this.price * 0.13;
	}
	
	return OrderItem;
});