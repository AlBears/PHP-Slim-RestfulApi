SlimBlog.Views.PostView = Backbone.View.extend({

  template: _.template(`
      <li class="text">Title: <%= title %> Body: <%= body %></li>
    `),
    events: {
      'click .text': 'removeModelView'
    },
  initialize: function(options) {

      },
  render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
  removeModelView: function(){
    this.remove();
    Backbone.trigger('delete', this.model);

  }

});
