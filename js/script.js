$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000
    });

    $('.top_menu_burger').click(function(event) {
        $('.top_header_nav, .top_logo, .top_menu_burger, .top_nav-menu, header_nav').toggleClass('active');
    });

    $('.bottom_menu_burger').click(function(event) {
        $('.bottom_header_nav, .bottom_logo, .bottom_menu_burger, .bottom_nav-menu').toggleClass('active');
        $('.bottom_menu_burger_text, .copywhrite').toggleClass('display_none');
    });
});