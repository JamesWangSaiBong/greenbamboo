'use strict' 

app.factory('Option', function() {
	function Option(option) {
		this.optName = option.opt_name;
		this.price = option.price;
		this.isPicked = false;
	};
	
	Option.prototype.pick = function() {
		this.isPicked = true;
	};
	
	Option.prototype.unpick = function() {
		this.isPicked = false;
	};
	
	Option.prototype.getIsPicked = function() {
		return this.isPicked;
	};
	
	return Option;
	
})