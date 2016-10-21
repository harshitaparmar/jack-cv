// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
    window.sr = ScrollReveal();
    sr.reveal('#picture1', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('#picture2', {
        duration: 1000,
        delay: 400
    });
    sr.reveal('.logo', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.second-logo', {
        duration: 1000,
        delay: 400
    });
     sr.reveal('#picture3', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);
   


})(jQuery); // End of use strict
