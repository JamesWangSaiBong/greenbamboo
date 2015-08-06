'use strict'

app.factory('OptionSet', function(Option){
	
	var pushOptionsIntoSet = function(optSet) {
		var optionsArray = [];
		for(var i=0; i<optSet.length; i++) {
			optionsArray.push(new Option(optSet[i]));
		};
		return optionsArray;
	}
	
	function OptionSet(optSet) {
		this.setOfOptions = pushOptionsIntoSet(optSet);
		this.isSelected = false;
		this.selectedOption = null;
	};
	
	OptionSet.prototype.pickOption = function(choice) {
		this.isSelected = true;
		this.selectedOption = choice;
	}
	
	return OptionSet;
})