SlimBlog.Models.Posts = Backbone.Collection.extend({

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
    _.bindAll(this, "infoRequest");

    },
    infoRequest: function(){
      console.log('INFO');
      this.trigger('posts:fetched');
    }


});
