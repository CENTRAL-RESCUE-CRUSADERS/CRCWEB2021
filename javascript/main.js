var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// scroll bar
// window.addEventListener('scroll', function(){
//     if (window.scrollY > 90){
//         document.querySelector('#main-header').style.opacity = 0.9;
//     }
//     else {
//         document.querySelector('#main-header').style.opacity = 1;
//     }
// });


// Read more and See less syntax
$(document).on('click','#more' , function(){
    $('.more-info').addClass('show');
    $('.less').addClass('show');
    $('.more').addClass('hide');
    $('.more-info').removeClass('hide');
    $('.less').removeClass('hide');
    $('.more').removeClass('show');
});

$(document).on('click','#less' , function(){
    $('.more-info').addClass('hide');
    $('.more').addClass('show');
    $('.less').addClass('hide');
    $('.more-info').removeClass('show');
    $('.less').removeClass('show');
    $('.more').removeClass('hide');
});
// Case II
$(document).on('click','#more1' , function(){
    $('.more-info1').addClass('show');
    $('.less1').addClass('show');
    $('.more1').addClass('hide');
    $('.more-info1').removeClass('hide');
    $('.less1').removeClass('hide');
    $('.more1').removeClass('show');
});

$(document).on('click','#less1' , function(){
    $('.more-info1').addClass('hide');
    $('.more1').addClass('show');
    $('.less1').addClass('hide');
    $('.more-info1').removeClass('show');
    $('.less1').removeClass('show');
    $('.more1').removeClass('hide');
});
// Case III
$(document).on('click','#more2' , function(){
    $('.more-info2').addClass('show');
    $('.less2').addClass('show');
    $('.more2').addClass('hide');
    $('.more-info2').removeClass('hide');
    $('.less2').removeClass('hide');
    $('.more2').removeClass('show');
});

$(document).on('click','#less2' , function(){
    $('.more-info2').addClass('hide');
    $('.more2').addClass('show');
    $('.less2').addClass('hide');
    $('.more-info2').removeClass('show');
    $('.less2').removeClass('show');
    $('.more2').removeClass('hide');
});
// Case IV
$(document).on('click','#more3' , function(){
    $('.more-info3').addClass('show');
    $('.less3').addClass('show');
    $('.more3').addClass('hide');
    $('.more-info3').removeClass('hide');
    $('.less3').removeClass('hide');
    $('.more3').removeClass('show');
});

$(document).on('click','#less3' , function(){
    $('.more-info3').addClass('hide');
    $('.more3').addClass('show');
    $('.less3').addClass('hide');
    $('.more-info3').removeClass('show');
    $('.less3').removeClass('show');
    $('.more3').removeClass('hide');
});
// end of read more and less


