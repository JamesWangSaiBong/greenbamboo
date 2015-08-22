'use strict'

app.factory('CYOMenuItem', function(MenuItem, OptionSet, AdvanceOrderItem, Order, CYOOrderItem) {
	
	var self = this;
	
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
	
	var clearSelectedChoices = function(menuItem) {
		menuItem.selectedChoices = [];
		menuItem.finalPrice = menuItem.price;
	}
	
	function CYOMenuItem() {
		MenuItem.apply(this, arguments); //Using the MenuItem constructor as part of this constructor
		this.isStaging = false;
		this.numOfChoices = arguments[0].num_of_choices;
		this.selectedChoices = [];
		this.finalPrice = this.price;
		if(arguments[0].options) {
			this.numOfOptions = arguments[0].options.length;
			this.options = setOptSetArray(arguments[0].options);
		}
	}
	
	//CYOMenuItem inherits from MenuItem
	CYOMenuItem.prototype = Object.create(MenuItem.prototype);
	CYOMenuItem.prototype.constructor = CYOMenuItem;

	CYOMenuItem.prototype.addToOrder = function() {
		/*Despite its name, the function is called from menuItemDir when user click the order-btn. 
		The menuItem is added when all options have been picked (see AdvanceMenuItem.prototype.completeOrder())*/
		this.isStaging = true;
	};
	
	CYOMenuItem.prototype.addChoice = function(choice) {
		if(this.selectedChoices.length < this.numOfChoices) {
			this.selectedChoices.push(choice);
			this.finalPrice += choice.addPrice;
			return true
		} else {
			return false;
		}
	}
	
	CYOMenuItem.prototype.removeChoice = function(choice) {
		var idx;
		for(var i=0; i<this.selectedChoices.length; i++){
			if(this.selectedChoices[i].optName === choice.optName) {
				idx = i;
			}
		};
		this.selectedChoices.splice(idx,1);
	}
	
	CYOMenuItem.prototype.resetSelf = function() {
		this.isStaging = false;
		clearSelectedOptions(this);
		clearSelectedChoices(this);
	}
	
	CYOMenuItem.prototype.completeOrder = function() {
		var response = {
			isCompleted: false,
			msg: ''
		};
		//This function can only be used when item is staging
		if(!this.isStaging) { return; }
		
		//Item is incompleted until all of its optionSet have been selected
		if(this.options) {
			for(var i=0; i<this.options.length; i++) {
				if(!this.options[i].isSelected) {
					response = {
						isCompleted: false,
						msg: 'Please select the option of your dish'
					}
					return response; 
				}
			};
		}
		
		//Item is incompleted until the correct num of choices have been picked
		if(this.selectedChoices.length !== this.numOfChoices) {
			response = {
				isCompleted: false,
				msg: 'You have not picked all your choices yet'
			};
			return response;
		}
		
		//Set isStaging back to false once the item has been completed (all options selected)
		var orderItem = new CYOOrderItem(this);
		Order.addItem(orderItem);
		if(this.options) { clearSelectedOptions(this); }
		clearSelectedChoices(this);
		this.orderQuantity++;
		this.isSelected = true;
		this.isStaging = false;
		
		response = {
			isCompleted: true,
			msg: ''
		};
		return response;
	};

	//Depracated
	CYOMenuItem.prototype.addToStaging = function() {
		this.orderQuantity = 1;
		this.isSelected = true; 
		this.isStaging = true;
	}
	
	//Depracated
	CYOMenuItem.prototype.incrementOrderQuantity = function() {
		this.orderQuantity++; //Used to keep track of selectedQuantity
		this.isStaging = true;
	}

	return CYOMenuItem;
});