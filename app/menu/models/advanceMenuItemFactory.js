'use strict'

app.factory('AdvanceMenuItem', function(MenuItem, OptionSet, AdvanceOrderItem, Order) {
	
	var setOptSetArray = function(optSets) {
		var optSetArray = [];
		for(var i=0; i<optSets.length; i++) {
			optSetArray.push(new OptionSet(optSets[i]));
		}
		return optSetArray;
	}
	
	//Private function; called when order is completed (see AdvanceMenuItem.prototype.completeOrder())
	var clearSelectedOptions = function(menuItem) {
		for(var i=0; i<menuItem.options.length; i++) {
			menuItem.options[i].clearOption();
		}
	};
	
	function AdvanceMenuItem() {
		MenuItem.apply(this, arguments); //Using the MenuItem constructor as part of this constructor
		this.numOfOptions = arguments[0].options.length;
		this.options = setOptSetArray(arguments[0].options);
		this.isStaging = false;
	}
	
	//AdvanceMenuItem inherits from MenuItem
	AdvanceMenuItem.prototype = Object.create(MenuItem.prototype);
	AdvanceMenuItem.prototype.constructor = AdvanceMenuItem;
	
	AdvanceMenuItem.prototype.addToOrder = function() {
		/*Despite its name, the function is called from menuItemDir when user click the order-btn. 
		The menuItem is added when all options have been picked (see AdvanceMenuItem.prototype.completeOrder())*/
		this.orderQuantity++;
		this.isSelected = true;
		this.isStaging = true;
	};
	
	AdvanceMenuItem.prototype.completeOrder = function() {
		var isCompleted = false;
		//This function can only be used when item is staging
		if(!this.isStaging) { return; }
		//Item is completed when all of its optionSet have been selected
		for(var i=0; i<this.options.length; i++) {
			if(!this.options[i].isSelected) { return isCompleted; }
		};
		//Set isStaging back to false once the item has been completed (all options selected)
		var orderItem = new AdvanceOrderItem(this);
		Order.addItem(orderItem);
		clearSelectedOptions(this);
		this.isStaging = false;
		isCompleted = true;
		return isCompleted;
	};

	//Depracated
	AdvanceMenuItem.prototype.addToStaging = function() {
		this.orderQuantity = 1;
		this.isSelected = true; 
		this.isStaging = true;
	}
	
	//Depracated
	AdvanceMenuItem.prototype.incrementOrderQuantity = function() {
		this.orderQuantity++; //Used to keep track of selectedQuantity
		this.isStaging = true;
	}

	return AdvanceMenuItem;
});