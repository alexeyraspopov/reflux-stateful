function assign(target){
	var sources = [].slice.call(arguments, 1),
		index, source;

	for(index = 0; index < sources.length; index++){
		source = sources[index];

		Object.keys(source).forEach(function(key){
			target[key] = source[key];
		});
	}
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