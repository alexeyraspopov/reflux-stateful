function assign(target, source){
	Object.keys(source).forEach(function(key){
		target[key] = source[key];
	});
}

module.exports = {
	getDefaultData: function(){
		return {};
	},
	init: function(){
		this.state = this.getDefaultData();
	},
	setState: function(newState){
		assign(this.state, newState);
		this.trigger(this.emit());
	},
	emit: function(){
		return this.state;
	}
};