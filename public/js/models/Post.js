SlimBlog.Models.Post = Backbone.Model.extend({
  sync: function(method, model, options) {
        options || (options = {});

        switch (method) {
            case "read":
                options.url = '/api/posts';
                break;
            case "delete":
                options.url = '/api/post/delete/'+ model.id;
                break;
            case "update":
                options.url = '/api/post/update' + model.id;
                break;
            case "create":
                options.url = '/api/post/add';
                break;
        }

        if (options.url)
            return Backbone.sync(method, model, options);
    },


  initialize: function(){
    Backbone.on('delete', this.deletePost, this);
  },

  deletePost: function(data){
    console.log("INSIDE POST", this);
    this.sync("delete", data);
  }
});
