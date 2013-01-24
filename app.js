var app = app || {};
(function(){

	app.Model = Backbone.Model.extend({

		defaults: function() {
			return {
				title: 'empty...',
				order: app.Model.nextOrder();
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

		
	})

	app.View = Backbone.View.extend({

	})

})()