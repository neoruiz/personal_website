(function ($) {
    "use strict";

    // Owl carousel 0.2  leatest version used
    // Bootstrap 3+ used
    // Thank you

    //Window load funtion
    $(window).load(function () {
        //Preloader
        $('.preloader').fadeOut('slow');

        //Mean menu Installing for Mobile Menu
        $('nav#dropdown').meanmenu();
    });

    // Initialize wow
    new WOW().init();

    //Testimonial Slider
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dotsSpeed: 2000,
        navSpeed: 2000,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        nav: false,
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    //Navigation
    var wHight = $(window).height();
    var cHight = wHight - 78;
    var wWidth = $(window).width();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.main-navigation').addClass('test');
            $('.main-navigation>div').removeClass('container');
            $('.main-navigation>div').addClass('container-fluid');
        } else {
            $('.main-navigation').removeClass('test');
            $('.main-navigation>div').addClass('container');
            $('.main-navigation>div').removeClass('container-fluid');
        }
    });

    //Modal Case study Modal Blog Modal

    $('.my-modal').animatedModal({
        modalTarget: 'portfolio-modal',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#fff'

    });
    $('.blog-modal').animatedModal({
        modalTarget: 'blog-content-modal',
        animatedIn: 'zoomIn',
        animatedOut: 'bounceOutDown',
        color: '#3498db'

    });

    //Portfolio slider
    $('.home .banner-content h4,.home-material .banner-content h4,.ui-expert .banner-content h4').typed({
        strings: ['Hi,I am'],
        typeSpeed: 100
    });

    //Initialize parallax
    var windowSize = $(window).width();
    if (windowSize > 991) {
        $('.home .banner,.home-material .banner').parallax('10%', 0.2);
    }

    //Scroll spy
    $('body').scrollspy({
        target: ".main-navigation",
        offset: 0
    });
    $(".main-menu>ul>li>a").on('click', function (event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1200, function () {
            window.location.hash = hash;
        });
    });

    //Scroll Top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $('.go-top').fadeIn();
            $('.go-top').removeClass('no-visibility');
        } else {
            $('.go-top').fadeOut();
        }
    });
    
    $('.go-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });


    var googleMapSelector = $('#contactgoogleMap'),
        myCenter = new google.maps.LatLng(40.743807, -73.982802);

    function initialize() {
        var mapProp = {
            center: myCenter,
            zoom: 13,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#444"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#333"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
            },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#eee"
            },
                        {
                            "visibility": "on"
                        }
                    ]
                }]
        };
        var map = new google.maps.Map(document.getElementById("contactgoogleMap"), mapProp);
        var marker = new google.maps.Marker({
            position: myCenter,
            animation: google.maps.Animation.BOUNCE,
            icon: 'img/map/location-pin.png'
        });
        marker.setMap(map);
    }
    if (googleMapSelector.length) {
        google.maps.event.addDomListener(window, 'load', initialize);
    }


})(jQuery);