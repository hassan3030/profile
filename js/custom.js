(function($) {



    $('#dl-menu').dlmenu();
    $('ul.dl-menu li a').smoothScroll();


    //animation
    new WOW().init();
    $('.carousel').carousel({
        interval: 2000
    })
})(jQuery);