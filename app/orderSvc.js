'use strict'

app.service('Order', function(Menu, OrderItem, AdvanceOrderItem) {
	
	this.items = {
		appetizers: [],
		vegetables: [],
		lightCourses: [],
		noodles: [],
		salads: []
	};
	
	var that = this;
	
	function _searchItem(item, name) {
		console.log(name);
		var itemType = item.getType();
		for(var i=0; i<that.items[itemType].length; i++) {
			console.log(that.items[itemType]);
			if(that.items[itemType][i].enName === name) {
				return that.items[itemType][i];
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
		console.log(menuItem);
		var orderItem = _searchItem(menuItem, _getMenuItemName(menuItem));
		if(orderItem) {
			orderItem.incrementQuantity();
			if(!!menuItem.options) { menuItem.clearSelectedOptions(); } //Call this method to reset all the selected options
			return;
		}
		if(!menuItem.options) {
			menuItem.addToOrder();
			var orderItem = new OrderItem(menuItem);
			this.items[orderItem.getType()].push(orderItem);
			console.log(this.items[orderItem.getType()]);
		} else {
			var advanceOrderItem = new AdvanceOrderItem(menuItem);
			this.items[advanceOrderItem.getType()].push(advanceOrderItem);
			menuItem.clearSelectedOptions(); //Call this method to reset all the selected options
			console.log(this.items[advanceOrderItem.getType()]);
		}
	};
		
	this.dropItem = function(orderItem) {
		var itemType = orderItem.getType();
		var i = this.items[itemType].indexOf(orderItem);
		if(i>-1) {
			if(orderItem.quantity == 1) {
				this.items[itemType].splice(i,1);
				Menu.decrementItemOrderQuantity(orderItem);
			} else if(orderItem.quantity > 1) {
				orderItem.decrementQuantity();
				Menu.decrementItemOrderQuantity(orderItem);
			}
		}
	};
});