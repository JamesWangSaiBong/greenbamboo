'use strict'

app.service('StagingArea', function(StagingMenuItem) {
	
	this.stagingItems = [];
	
	this.addItem = function(menuItem) {
		for(var i=0; i<this.stagingItems.length; i++) {
			if(this.stagingItems[i].menuId === menuItem.id) {
				this.stagingItems[i].collect(menuItem);
				return;
			}
		};
		this.stagingItems.push(new StagingMenuItem(menuItem));
	}
})