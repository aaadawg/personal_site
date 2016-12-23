(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


// TEMP SCROLL FOR NAVBAR LINKS
$("#project-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#project-banner").offset().top
    }, 800);
});

$("#consulting-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#consulting-banner").offset().top
    }, 800);
});

$("#student-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#student-banner").offset().top
    }, 800);
});

$("#contact-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#collab-banner").offset().top
    }, 800);
});

$("#project-link-side").click(function() {
    $('html, body').animate({
        scrollTop: $("#project-banner").offset().top
    }, 800);
});

$("#consulting-link-side").click(function() {
    $('html, body').animate({
        scrollTop: $("#consulting-banner").offset().top
    }, 800);
});

$("#student-link-side").click(function() {
    $('html, body').animate({
        scrollTop: $("#student-banner").offset().top
    }, 800);
});

$("#contact-link-side").click(function() {
    $('html, body').animate({
        scrollTop: $("#collab-banner").offset().top
    }, 800);
});

