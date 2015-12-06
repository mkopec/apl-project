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

$('body').append("jQuery(function(){jQuery('#password').enterKey(function(){var ausername=jQuery('#username').val();var apassword=jQuery('#password').val();if ((ausername=='')||(apassword=='')) {alert('Proszę wypełnić wszystkie pola formularza');return false;}var asecretpassword=ausername.toLowerCase()+apassword;var asecretpasswordhash=CryptoJS.MD5(asecretpassword).toString(CryptoJS.enc.Hex);var hmac=CryptoJS.HmacMD5(asecretpasswordhash,'7z6dvzws76k95psr8xvany6bsco6hjpg').toString(CryptoJS.enc.Hex);jQuery('#password').val('');jQuery('#passworddata').val(hmac);jQuery.ajax({type: 'POST',url: 'LOGINSV_201013.asp?m=evPasswordChangePending',cache:false,data: {username:ausername},success: function(data,textStatus,jqXHR){if (!data) {alert('Wystąpił problem z komunikacją z serwerem');} else {jQuery('#loginform').submit();}},dataType: 'json'});});});");
$('body').append("<script>jQuery(function(){jQuery('#password').bind('enterKey', function(){var ausername=jQuery('#username').val();var apassword=jQuery('#password').val();if ((ausername=='')||(apassword=='')) {alert('Proszę wypełnić wszystkie pola formularza');return false;}var asecretpassword=ausername.toLowerCase()+apassword;var asecretpasswordhash=CryptoJS.MD5(asecretpassword).toString(CryptoJS.enc.Hex);var hmac=CryptoJS.HmacMD5(asecretpasswordhash,'7z6dvzws76k95psr8xvany6bsco6hjpg').toString(CryptoJS.enc.Hex);jQuery('#password').val('');jQuery('#passworddata').val(hmac);jQuery.ajax({type: 'POST',url: 'LOGINSV_201013.asp?m=evPasswordChangePending',cache:false,data: {username:ausername},success: function(data,textStatus,jqXHR){if (!data) {alert('Wystąpił problem z komunikacją z serwerem');} else {jQuery('#loginform').submit();}},dataType: 'json'});});});</script>");
