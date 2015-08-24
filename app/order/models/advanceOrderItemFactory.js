'use strict'

app.factory('AdvanceOrderItem', function(OrderItem) {
	
	var setName = function(menuItem) {
		var enName = menuItem.enName + ' (' + menuItem.options[0].selectedOption.optName;
		for(var i=1; i<menuItem.options.length; i++) {
			enName = enName + ', ' + menuItem.options[i].selectedOption.optName;
		}
		enName = enName + ')';
		return enName;
	}
	
	var setCnName = function(menuItem) {
		var cnName = menuItem.cnName + ' (' + menuItem.options[0].selectedOption.optCnName;
		for(var i=1; i<menuItem.options.length; i++) {
			cnName = cnName + ', ' + menuItem.options[i].selectedOption.optCnName;
		}
		cnName = cnName + ')';
		return cnName;
	}
	
	function AdvanceOrderItem() {
		OrderItem.apply(this, arguments);
		this.enName = setName(arguments[0]);
		this.cnName = setCnName(arguments[0]);
	};
	
	//AdvanceOrderItem inherits from OrderItem
	AdvanceOrderItem.prototype = Object.create(OrderItem.prototype);
	AdvanceOrderItem.prototype.constructor = AdvanceOrderItem;
	
	return AdvanceOrderItem;
});