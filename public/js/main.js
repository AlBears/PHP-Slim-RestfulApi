var SlimBlog = {

    Views: {},
    Models: {},
    Collections: {},
    Router: {}
}
$(document).ready(function(){
  SlimBlog.Router.Instance = new SlimBlog.Router();

  SlimBlog.Router.Instance.on('route:home', function(){

    var posts = new SlimBlog.Models.Posts({model:new SlimBlog.Models.Post});
    posts.fetch({success: posts.infoRequest});
    var postsView = new SlimBlog.Views.PostsView({collection: posts});
    var addPostView = new SlimBlog.Views.AddPostView();
    $('#add').append(addPostView.render().el);
  });

  Backbone.history.start();
});
