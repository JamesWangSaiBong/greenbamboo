'use strict'

app.service('Order', function(Menu, OrderItem, AdvanceOrderItem) {
	
	this.items = [];
	
	var that = this;
	
	function _searchItemByName(name) {
		for(var i=0; i<that.items.length; i++) {
			if(that.items[i].enName === name) {
				return that.items[i];
			}
		}
	}
	
	function _getMenuItemName(menuItem) {
		//If menuItem.options is null, it is a basic menuItem, thus simply return its enName
		if(!menuItem.options) { 
			return menuItem.enName 
		} else {
			var enName = menuItem.enName + ' (' + menuItem.options[0].selectedOption.optName;
			for(var i=1; i<menuItem.options.length; i++) {
				enName = enName + ', ' + menuItem.options[i].selectedOption.optName;
			}
			enName = enName + ')';
			return enName;
		}
	}
	
	this.addItem = function(menuItem) {
		var orderItem = _searchItemByName(_getMenuItemName(menuItem));
		if(orderItem) {
			orderItem.incrementQuantity();
			return;
		}
		if(!menuItem.options) {
			menuItem.addToOrder();
			this.items.push(new OrderItem(menuItem));
		} else {
			this.items.push(new AdvanceOrderItem(menuItem));
		}
	};
	
	
	this.dropItem = function(orderItem) {
		var i = this.items.indexOf(orderItem);
		if(i>-1) {
			this.items.splice(i,1);
			Menu.dropItemFromOrder(orderItem);
		}
	};
});