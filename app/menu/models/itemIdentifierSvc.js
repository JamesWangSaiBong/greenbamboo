'use strict'

app.service('ItemIdentifier', function(MenuItem, AdvanceMenuItem, CYOMenuItem) {
	var items = {
		appetizers: [],
		noodles: [],
		lightCourses: [],
		vegetables: [],
		salads: [],
		cyo: []
	};
	
	this.identifyMenuItem  = function(menuItems) {
		var menu = items;
		
		for(var i=0; i<menuItems.length; i++) {
			if(menuItems[i].type === 'cyo') {
				menu.cyo.push(new CYOMenuItem(menuItems[i]));
			}
			if(!menuItems[i].options) {
				if(menuItems[i].type === 'appetizers') { menu.appetizers.push(new MenuItem(menuItems[i])) };
				if(menuItems[i].type === 'noodles') { menu.noodles.push(new MenuItem(menuItems[i])) };
				if(menuItems[i].type === 'lightCourses') { menu.lightCourses.push(new MenuItem(menuItems[i])) };
				if(menuItems[i].type === 'vegetables') { menu.vegetables.push(new MenuItem(menuItems[i])) };
				if(menuItems[i].type === 'salads') { menu.salads.push(new MenuItem(menuItems[i])) };
			} else if(!!menuItems[i].options) {
				if(menuItems[i].type === 'appetizers') { menu.appetizers.push(new AdvanceMenuItem(menuItems[i])) };
				if(menuItems[i].type === 'noodles') { menu.noodles.push(new AdvanceMenuItem(menuItems[i])) };
				if(menuItems[i].type === 'lightCourses') { menu.lightCourses.push(new AdvanceMenuItem(menuItems[i])) };
				if(menuItems[i].type === 'vegetables') { menu.vegetables.push(new AdvanceMenuItem(menuItems[i])) };
				if(menuItems[i].type === 'salads') { menu.salads.push(new AdvanceMenuItem(menuItems[i])) };
			}			
		};
		return menu;
	}
});