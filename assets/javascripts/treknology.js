$(document).ready(function() {
    $("#menu").click(function() {
      $("#about").toggle();
});

    $(".close").click(function() {
      $("#about").hide();
    });
    $("#menu-in").click(function() {
      $("#about").hide();
    });
});

$(function() {
    $(window).scroll( function(){
        $('.comm-box').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 1200;
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'0.9'}, 4000);
            }
        });
    });
});
