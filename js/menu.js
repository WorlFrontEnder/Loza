$(document).ready(function() {
 var btnMenu = $('.mobil-menu');
 var topMenu = $('.top-menu-popup');
 var btnMenu2 = $('.mobil-closed');


$(btnMenu).on('click', function(e) {
    e.preventDefault();
    topMenu.slideDown();
    btnMenu2.slideDown();
});


$(btnMenu2).on('click', function(e) {
    e.preventDefault();
    topMenu.slideUp();
    btnMenu2.slideUp();
});



});