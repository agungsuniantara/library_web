jQuery(document).ready(function($){
    // Cache some jQuery objects
    var modalTrigger = $('.trigger'),
        transitionLayer = $('.cd-transition-layer');

    // Open modal window
    modalTrigger.on('click', function(event){    
        event.preventDefault();
        var targetHref = $(this).attr('href');
        transitionLayer.addClass('visible opening');
        var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 800;
        
        setTimeout(function(){
            transitionLayer.removeClass('opening');
            window.location.href = targetHref;
        }, delay);
    });
});
