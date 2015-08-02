'use strict'

app.service('Order', function() {
	this.items = [];
	
	this.addItem = function(item) {
		for(var i=0; i<this.items.length; i++) {
			if(this.items[i].enName === item.enName) {
				return;
			}
		}
		this.items.push(item);
		console.log(this.items);
	};
	
	this.dropItem = function(item) {
		for(var i=0; i<this.items.length; i++) {
			if(this.items[i].enName === item.enName) {
				this.items.splice(i,1);
			}
		}
	};
});