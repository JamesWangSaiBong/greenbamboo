'use strict'

app.factory('AdvanceMenuItem', function(MenuItem, OptionSet) {
	
	var setOptSetArray = function(optSets) {
		var optSetArray = [];
		for(var i=0; i<optSets.length; i++) {
			optSetArray.push(new OptionSet(optSets[i]));
		}
		return optSetArray;
	}
	
	function AdvanceMenuItem() {
		MenuItem.apply(this, arguments); //Using the MenuItem constructor as part of this constructor
		this.numOfOptions = arguments[0].options.length;
		this.options = setOptSetArray(arguments[0].options);
		this.isStaging = false;
	}
	
	
	//AdvanceMenuItem inherits from MenuItem
	AdvanceMenuItem.prototype = Object.create(MenuItem.prototype);
	AdvanceMenuItem.prototype.constructor = AdvanceMenuItem;
	
	AdvanceMenuItem.prototype.addToStaging = function() {
		this.addToOrder(); //Used to keep track of isSelected and selectedQuantity
		this.isStaging = true;
		console.log(this);
	}
	
	AdvanceMenuItem.prototype.incrementOrderQuantity = function() {
		this.orderQuantity++; //Used to keep track of selectedQuantity
		this.isStaging = true;
	}
	
	AdvanceMenuItem.prototype.isCompleted = function() {
		var isCompleted = false;
		//This function can only be used when item is staging
		if(!this.isStaging) { return; }
		//Item is completed when all of its optionSet have been selected
		for(var i=0; i<this.options.length; i++) {
			if(!this.options[i].isSelected) { return isCompleted; }
		};
		isCompleted = true;
		//Clear all selected options
		
		
		//Set isStaging back to false once the item has been completed (all options selected)
		this.isStaging = false;
		return isCompleted;
	}
	
	return AdvanceMenuItem;
});