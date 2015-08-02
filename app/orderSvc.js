'use strict'

app.service('Order', function(Menu) {
	this.items = [];
	
	this.addItem = function(menuItem) {
		for(var i=0; i<this.items.length; i++) {
			if(this.items[i].id === menuItem.id) {
				return;
			}
		};
		this.items.push(menuItem.addToOrder());
	};
	
	this.dropItem = function(orderItem) {
		for(var i=0; i<this.items.length; i++) {
			if(this.items[i].id === orderItem.id) {
				this.items.splice(i,1);
				Menu.dropItemFromOrder(orderItem.id);
			}
		}
	};
});