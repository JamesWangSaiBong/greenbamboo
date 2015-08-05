'use strict'

app.factory('StagingMenuItem', function() {
	function StagingMenuItem(menuItem) {
		this.menuId = menuItem.id;
		this.options = menuItem.options;
		this.collection = [menuItem];
	};
	
	StagingMenuItem.prototype.collect = function(menuItem) {
		this.collection.push(menuItem);
	}
	
	return StagingMenuItem;
})