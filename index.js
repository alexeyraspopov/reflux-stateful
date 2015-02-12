module.exports = {
	getDefaultData: function(){
		return {};
	},
	init: function(){
		this.state = this.getDefaultData();
	},
	setState: function(newState){
		this.state = newState;
		this.trigger(this.emit());
	},
	emit: function(){
		return this.state;
	}
};