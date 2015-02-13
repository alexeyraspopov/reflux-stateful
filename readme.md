# reflux-stateful

RefluxJS Mixin which provides state management methods for Stores.

## Install

```bash
$ npm install reflux-stateful --save
```

```bash
$ bower install reflux-stateful --save
```

## Usage

I've used ImmutableJS just for example.

If you're familiar with React's `this.state` and `this.setState` you already know how to use it with this mixin.

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

Mixin provides `store.emit` methods which allows you to fetch current state from store to React component

	var TodoList = React.createClass({
		getInitialData: function(){
			return { items: store.emit() };
		}
	});

Also, `emit` is `render`-like method for your data.

	var Store = Reflux.createStore({
		mixins: [Stateful],

		getDefaultData: function(){
			return [];
		},

		emit: function(){
			return this.state.join(',');
		}
	});

All stores listeners will receive result of `emit` method.

## License

MIT License