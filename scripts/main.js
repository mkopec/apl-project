$(document).ready(function() {
    $(document).scroll(function() {
        var yOffset = window.pageYOffset;
        var navbarPosition = $('.header').height();

        if (yOffset >= navbarPosition - 5) {
            $('.navbar').addClass('sticky');
            $('.header').css("margin-bottom", $('.navbar').height() + "px");
        }

        else {
            $('.navbar').removeClass('sticky');
            $('.header').css("margin-bottom", "0");
        }
    });
});
