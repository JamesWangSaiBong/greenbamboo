'use strict'

app.service('Order', function() {
	
	this.items = {
		appetizers: [],
		vegetables: [],
		lightCourses: [],
		noodles: [],
		salads: [],
		cyo: []
	};
	
	this.info = {
		quantity: 0,
		beforeTax: 0,
		tax: 0,
		total: 0
	}
	
	var self = this;
	
	//Private method to search item in this.items
	var _searchItem = function(orderItem) {
		var itemType = orderItem.getType();
		var itemName = orderItem.getName();
		for(var i=0; i<self.items[itemType].length; i++) {
			if(self.items[itemType][i].enName === itemName) {
				return self.items[itemType][i];
			}
		}
	}
	
	//Private method to get menuItem name (name can be different depending on the selected options). This is mainly used by _searchItem(item, name)
	var _getMenuItemName = function(menuItem) {
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
	
	//Private method to add price 
	var _addPriceAndQuantity = function(orderItem) {
		self.info.quantity++;
		self.info.beforeTax += orderItem.getPrice();
		self.info.tax += orderItem.getTax();
		self.info.total = self.info.beforeTax + self.info.tax;
	}
	
	//Private method to deduct price
	var _deductPriceAndQuantity = function(orderItem) {
		self.info.quantity--;
		self.info.beforeTax -= orderItem.getPrice();
		self.info.tax -= orderItem.getTax();
		self.info.total = self.info.beforeTax + self.info.tax;
	}
	
	
	this.addItem = function(orderItem) {
		var item = _searchItem(orderItem);
		if(item) {
			item.incrementQuantity();
			_addPriceAndQuantity(item);
			return;
		}
		this.items[orderItem.getType()].push(orderItem);
		_addPriceAndQuantity(orderItem);
	};
		
	this.dropItem = function(orderItem) {
		var itemType = orderItem.getType();
		var i = this.items[itemType].indexOf(orderItem);
		if(i>-1) {
			if(orderItem.quantity == 1) {
				this.items[itemType].splice(i,1);
				_deductPriceAndQuantity(orderItem);
			} else if(orderItem.quantity > 1) {
				orderItem.decrementQuantity();
				_deductPriceAndQuantity(orderItem);
			}
		}
	};
});