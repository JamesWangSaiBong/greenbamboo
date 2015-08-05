'use strict'

app.factory('AdvanceMenuItem', function(MenuItem) {
	function AdvanceMenuItem() {
		MenuItem.apply(this, arguments); //Using the MenuItem constructor as part of this constructor
		this.numOfOptions = arguments[0].options.length;
		this.options = arguments[0].options;
	}
	
	//AdvanceMenuItem inherits from MenuItem
	AdvanceMenuItem.prototype = Object.create(MenuItem.prototype);
	AdvanceMenuItem.prototype.constructor = AdvanceMenuItem;
	
	return AdvanceMenuItem;
});