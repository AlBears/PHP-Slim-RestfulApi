SlimBlog.Views.AddPostView = Backbone.View.extend({

  events: {
    'click #register': 'submit'
  },

  TagName: 'form',
  id: 'postForm',
  template: _.template(`
  		<div>
  			<label>Title</label>
  			<input type="text" id="title">
  		</div>

  		<div>
  			<label>Category</label>
  			<span id="category_list"></span>
  		</div>

  		<div>
  			<label>Body</label>
  			<textarea id="body"></textarea>
  		</div>
  		<input type="submit" value="Submit" id="register">
  `),

  render: function() {
      this.$el.html(this.template());
      return this;
    },
  submit: function(){
    var data = {
      title: this.$el.find("#title").val(),
      body: this.$el.find("#body").val()
    };
    Backbone.trigger('form:submitted', data);

  }

})
