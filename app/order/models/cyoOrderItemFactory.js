'use strict'

app.factory('CYOOrderItem', function(OrderItem) {
	
	var setName = function(menuItem) {
		var enName = menuItem.enName + ' (';
		if(menuItem.options) {
			enName += menuItem.options[0].selectedOption.optName;
			for(var i=1; i<menuItem.options.length; i++) {
				enName = enName + ', ' + menuItem.options[i].selectedOption.optName;
			}
		};
		enName += ' with ' + menuItem.selectedChoices[0].optName;
		for(var i=1; i<menuItem.selectedChoices.length; i++) {
			enName = enName + ', ' + menuItem.selectedChoices[i].optName;
		}
		enName = enName + ')';
		return enName;
	}
	
	var setCnName = function(menuItem) {
		var cnName = menuItem.cnName + ' (';
		if(menuItem.options) {
			cnName += menuItem.options[0].selectedOption.optCnName;
			for(var i=1; i<menuItem.options.length; i++) {
				cnName = cnName + ', ' + menuItem.options[i].selectedOption.optCnName;
			}
		};
		cnName += ' 配 ' + menuItem.selectedChoices[0].optCnName;
		for(var i=1; i<menuItem.selectedChoices.length; i++) {
			cnName = cnName + ', ' + menuItem.selectedChoices[i].optCnName;
		}
		cnName = cnName + ')';
		return cnName;
	}
	
	function CYOOrderItem() {
		OrderItem.apply(this, arguments);
		this.price = arguments[0].finalPrice;
		this.enName = setName(arguments[0]);
		this.cnName = setCnName(arguments[0]);
	};
	
	//CYOOrderItem inherits from OrderItem
	CYOOrderItem.prototype = Object.create(OrderItem.prototype);
	CYOOrderItem.prototype.constructor = CYOOrderItem;
	
	return CYOOrderItem;
});