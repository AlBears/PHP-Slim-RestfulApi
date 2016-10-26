$(document).ready(function(){
  $.get('http://restful:8888/api/posts', function(data){
    var output = '<ul>';
      $.each(JSON.parse(data), function(index, post){
        output += '<li>'+post.title+'<a href="#"onClick = deleteTask('+post.id+')>x</a></li>';
      });
      output += '</ul>';

      $('#posts').html(output);
  });
  $.get('http://restful:8888/api/categories', function(data){
    var output = '<ul>';
      $.each(JSON.parse(data), function(index, category){
        output += '<li>'+category.name+'</li>';
      });
      output += '</ul>';

      $('#categories').html(output);
  });
  $.get('http://restful:8888/api/categories', function(data){
		var output = '<select id="category_id">';
			$.each(JSON.parse(data), function(index, category){
				output += '<option value="'+category.id+'">'+category.name+'</option>';
			});
		output += '</select>';

		$('#category_list').html(output);
	});

	$('#postForm').submit(function(e){
		e.preventDefault();

		var title = $('#title').val();
		var category_id = $('#category_id').val();
		var body = $('#body').val();

		$.post("http://restful:8888/api/post/add", {
			title: title,
			category_id: category_id,
			body:body
		}).done(function(data){
			alert( "Data Loaded: " + data );
		});
	});
});
  function deleteTask(taskId){
  if(confirm("Do you really want to delete task?")){
      $.ajax({
          url: "http://restful:8888/api/post/delete/"+taskId,
          type: 'DELETE',
          success: function(){alert('success')},
          error: function(){alert('error')}
      });
    }
  return false;
}
