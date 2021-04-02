$(document).ready(function(){
    $('#testimonial').owlCarousel({
        loop:true,
        center: true,
        item: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 10500,
        smartSpeed: 450,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    }); 

});  

