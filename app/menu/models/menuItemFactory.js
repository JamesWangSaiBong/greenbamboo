'use strict'

app.factory('MenuItem', function(OrderItem, Order) {
	function MenuItem(item) {
		this.id = item.id;
		this.enName = item.en_name;
		this.type = item.type;
		this.price = item.price;
		this.orderQuantity = 0;
		this.isSelected = false;
	};
	
	MenuItem.prototype.getIsSelected = function() {
		return this.isSelected;
	}
	
	MenuItem.prototype.addToOrder = function() {
		this.orderQuantity++;
		this.isSelected = true;
		// return an order object to be registered into the Order by the OrderSvc
		var orderItem = new OrderItem(this);
		Order.addItem(orderItem);
	};
	
	//Deprecated
	MenuItem.prototype.dropFromOrder = function() {
		this.orderQuantity = 0;
		this.isSelected = false;
	};
	
	//Deprecated
	MenuItem.prototype.incrementOrderQuantity = function() {
		this.orderQuantity++;
	};
	
	MenuItem.prototype.decrementOrderQuantity = function() {
		this.orderQuantity--;
		if(this.orderQuantity === 0) { 
			this.isSelected = false;
		};
	};
	
	MenuItem.prototype.getType = function() {
		return this.type;
	}
	
	return MenuItem;
});