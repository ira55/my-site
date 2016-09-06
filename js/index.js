$(document).ready(function() {
	
	$('.lightbox_img').click(function(e) {

		e.preventDefault();
		
		
		var image_src = $(this).attr("src");
		
		if ($('#lightbox').length > 0) { 
			$('#close').html('<img src="' + image_src + '" />');
		  
			$('#lightbox').show();
		}
		
 		else { 
 			var lightbox = 
 			'<div id="lightbox">' +
				'<i class="fa fa-times fa-2x" aria-hidden="true"></i>' +
				'<div id="close">' + 
					'<img src="' + image_src +'" />' +
				'</div>' +	
			'</div>';
				
			$('body').append(lightbox);
 		}
		
		});
		
		
	// 	$('#lightbox').click(function() {
	// 	    $(this).hide();
	// 	});
	// 	$('#lightbox').click(function() {
	// 	$('#lightbox').hide();
	// 	});
	
	
	
	 $('#lightbox').on('click', function(){
        $('#lightbox').hide();
	});
 });
 
  
 $(function() {
  $('#btn-send').click(sendForm);  
});

function sendForm(e) {
    e.preventDefault();
    $.ajax ({
        url:"https://formspree.io/ira.demkovych@gmail.com", 
        method:"POST",
        data: {
            name:$('#name').val(),
            email:$('#email').val(),
            message:$('#text').val()
        },
        dataType:"json",
        success:function(){
            $('#thanks').html('Thank you!');
        }
    });
};

         $(document).ready(function( $ ) {
            $(".navigation").mmenu();
         });
     
