document.addEventListener("DOMContentLoaded", function() {
    Array.from(document.getElementsByClassName('form-checkbox')).forEach(checkbox => {
    	checkbox.addEventListener('click', function(){
            var id = $(this).parent().parent().attr('data-id');

            $.ajax({
                type: 'PUT',
                url: '/starter/' + id,
                success: function(data){
                    window.location.href = response.redirect;
                }
            });
    	})
    });
});











