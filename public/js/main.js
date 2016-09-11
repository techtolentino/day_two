document.addEventListener("DOMContentLoaded", function() {
	var formCheckBox = document.getElementById('form-checkbox');
	
	formCheckBox.addEventListener('click', function(){
		console.log('yo, you did it!')

        var id = $(this).parent().parent().attr('data-id');

        console.log(id, "<<<<<<");

        $.ajax({
            type: 'PUT',
            url: '/starter/' + id,
            success: function(data){
                location.reload();
            }
        });
	})
});











