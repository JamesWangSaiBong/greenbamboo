'use strict'

app.factory('AdvanceMenuItem', function(MenuItem) {
	function AdvanceMenuItem() {
		MenuItem.apply(this, arguments); //Using the MenuItem constructor as part of this constructor
		this.numOfOptions = arguments[0].options.length;
		this.options = arguments[0].options;
		this.numOfStagingItems = 0;
	}
	
	//AdvanceMenuItem inherits from MenuItem
	AdvanceMenuItem.prototype = Object.create(MenuItem.prototype);
	AdvanceMenuItem.prototype.constructor = AdvanceMenuItem;
	
	AdvanceMenuItem.prototype.addToStaging = function() {
		this.addToOrder(); //Used to keep track of isSelected and selectedQuantity
		this.numOfStagingItems = 1;
	}
	
	AdvanceMenuItem.prototype.incrementStagingQuantity = function() {
		this.numOfStagingItems++;
		this.incrementOrderQuantity(); //Used to keep track of selectedQuantity
	}
	
	return AdvanceMenuItem;
});