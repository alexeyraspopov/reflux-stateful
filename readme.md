# reflux-stateful

RefluxJS Mixin which provides state management methods for Stores.

## Install

	npm install reflux-stateful --save

## Usage

I've used ImmutableJS just for example.

You need to use `getDefaultData` in your store to declare initial data.

	var Stateful = require('reflux-stateful'),
		Immutable = require('immutable');

	var Todos = Reflux.createStore({
		listenables: ... some actions ...
		mixins: [Stateful],

		getDefaultData: function(){
			return Immutable.OrderedMap();
		},

		add: function(title){
			var id = generateId(),
				newTodo = { title: title, completed: false };

			this.setState(this.state.set(id, newTodo));
		},

		remove: function(id){
			this.setState(this.state.remove(id));
		}
	});

Mixin provides `store.getData` methods which allows you to fetch current state from store to React component

	var TodoList = React.createClass({
		getInitialData: function(){
			return { items: store.getData() };
		}
	});

## License

MIT License