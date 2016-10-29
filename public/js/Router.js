SlimBlog.Router = Backbone.Router.extend({

    routes: {
        'home': 'home',
        '*path': 'home'
      }
});
