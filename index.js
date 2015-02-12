module.exports = {
	init: function(){
		this.state = typeof this.getDefaultData === 'function' ? this.getDefaultData() : {};
	},
	setState: function(newState){
		this.state = newState;
		this.trigger(this.state);
	},
	getData: function(){
		return this.state;
	},
	emit: function(a){
		return a;
	}
};