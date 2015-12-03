$(document).ready(function() {
    // alert("Yo");
    $("#menu").click(function() {
      $("#about").toggle();
      // $(".communicator-space-object").toggle();
      // $(".space-object").toggle();
      // $("h2").toggle();
      // $(".viewscreen").toggle();
      // $(".comm-box").toggle()
      // $(".vid-bg").toggle()
      // $(".video").toggle()
      // $("ul").toggle()
      // $(".sources").toggle()
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

// function .comm-box() {
// $(‘.comm-box’).each(function (i) {
//
// var top_of_object = $(this).position().top;
// var bottom_of_window = $(window).scrollTop() + $(window).height();
//
// bottom_of_window = bottom_of_window – 50;
//
// if (top_of_object < bottom_of_window) {
// $(this).animate({ 'opacity': '0.9' }, 500);
// }
// });
// }
//
// $(function() {
// comm-box();
//
// $(window).scroll(function() {
// comm-box();
// });
// });
