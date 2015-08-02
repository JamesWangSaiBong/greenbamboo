'use strict'

app.factory('MenuItem', function() {
	function MenuItem(item) {
		this.id = item.id;
		this.enName = item.en_name;
		this.price = item.price;
		this.isSelected = false;
	};
	
	MenuItem.prototype.addToOrder = function() {
		var that = this
		that.isSelected = true;
		var orderItem = {
			id: that.id,
			enName: that.enName,
			price: that.price
		};
		return orderItem;
	};
	
	MenuItem.prototype.dropFromOrder = function() {
		this.isSelected = false;
	}
	
	return MenuItem;
});