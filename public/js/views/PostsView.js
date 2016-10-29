SlimBlog.Views.PostsView = Backbone.View.extend({

  initialize: function(options){

    Backbone.on('form:submitted', this.addPost, this);
    this.collection.on('posts:fetched', this.render, this);
  },
  render: function(){
    console.log('render PostsView');
    $("#posts").empty();
    _.each(this.collection.models, function(item){
      var postview = new SlimBlog.Views.PostView({ model: item });
    $('#posts').append(postview.render().el);
    })
    return this;

  },

  addPost: function(data){

    var post = new SlimBlog.Models.Post({title: data.title, body: data.body});
    post.save();
    this.collection.add(post);
    this.collection.fetch({success: this.render.bind(this)});
    console.log(this.collection);
  }

});
