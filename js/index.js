$(function() {
	
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
				'<i class="fa fa-times fa-3x" aria-hidden="true"></i>' +
				'<div id="close">' + 
					'<img src="' + image_src +'" />' +
				'</div>' +	
			'</div>';
				
			$('body').append(lightbox);
 		}
		
		});
	
	$('body').on('click', '#lightbox', function() {

  $('#lightbox').hide();

    });
 });
 
 $(function() {
    
    $('.smooth').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1500);
        }
    });
    
}); 
 
function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: {lat: 49.8140455, lng: 23.9867778},
            zoom: 8
        });
      }
