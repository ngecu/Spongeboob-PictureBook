$(document).ready(function () {
    //Set Option
    var speed = 500; //fade speed
    var autoswitch = true; //auto slider option
    var autoswitch_speed = 10000 //auto slider speed


    //add initial active class
    $('.slide').first().addClass('active');

    //Hide all slides
    $('.slide').hide();

    //show first slide
    $('.active').show();

    //Next Handler
    $('#next').on('click', nextSlide);


    $('#prev').on('click',prevSlide)


        //Auto slider handler
    if (autoswitch) {
        setInterval(nextSlide,autoswitch_speed);
    };
setin
    function nextSlide() {
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':last-child')) {
            $('.slide').first().addClass('active');
            
            
        }
        else{
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    } 

    function prevSlide() {
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':first-child')) {
            $('.slide').last().addClass('active');
            
        }
        else{
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
});