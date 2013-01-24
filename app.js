var app = app || {};
(function(){

	app.Model = Backbone.Model.extend({

		defaults: function() {
			return {
				title: 'empty...',
				order: todos.nextOrder();
				done: false;
			}
		}

	// 初始化之后每一个todo都设定了默认标题
		initialize: function() {
			if(!this.get('title')){
				this.set({
					title: this.defaults().title
				})
			}
		}
	})

	// 切换完成状态
		toggleDone: function() {
			this.save({
				done: !this.get('done')
			})
		} 

	app.Collection = Backbone.Collection.extend({
		
		model: app.Model,

		localStorage: new Backbone.LocalStorage("todos-backbone"),

		done: function() {
			return this.filter(function(todo){
				// todo == this 回调函数执行后返回真的元素将会被保留返回一个新的数组
				return todo.get('done')
			})
		}

		// 将this.done返回的数组(使用apply将数组分离为一个个的实参)从todolist中除去然后返回
		remain: function() {
			return this.without.apply(this,this.done())
		}

		//
		nextOrder: function() {
			if(!this.get('order')) return 1;
			// 最后一个元素的order+1
			else this.last().get('order') + 1;
		}

		// 根据order排序 通过pluck(key)返回key对应的value
		comparator: function(todo) {
			return todo.get('order');
		} 
	})

	// 实例化collection
	var todos = new app.Collection;

	app.View = Backbone.View.extend({

	})

})()