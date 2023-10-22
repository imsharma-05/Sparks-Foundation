/* preloader hiding code */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* Progress Bar */

$(function () {
    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });

        this.destroy();
    },
        {
            offset: 'bottom-in-view'

        });

});


/* Responsive tabs */
$(function() {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
    
});

/* portfolio Section */

$(window).on('load', function() {

    // Intialize Isotope
    $(".isotope-container").isotope({      
    });

    // filter items on button click

    $("#isotope-filters").on('click', 'button', function() {

      // get filter value

      var filterValue = $(this).attr('data-filter');
      
      //filter portfolio

      $(".isotope-container").isotope({
            filter: filterValue
            
    });

    // Active Button
    $("#isotope-filters").find('.active').removeClass('active');
    $(this).addClass('active');


    });

});

/* Magnific popup plugin */

$(function() {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open

        type: 'image',
        gallery: {
            enabled: true
        }

    });
});

/* Testimonial Section */

$(function() {
    $("#testimonial-slider").owlCarousel({
       items: 1,
        autoplay: false ,
        smartSpeed: 700,
        loop: true, 
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ]
        
        
    });
});

