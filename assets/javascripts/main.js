$(document).ready(function(){
    $(window).scroll(function() {
        if ($(document).scrollTop() < 50) {
            $('#siteNav').css('background-color', '#efcc31;');
        } else {
            $('#siteNav').css('background-color', 'transparent');
        }
    });

    $.backstretch('assets/images/events/basant.jpg');
    /*$('.bg').backstretch([
        "assets/images/events/basant.png"
      , "assets/images/entrees/beefOverRice.jpg"
      , "assets/images/events/basant.jpg"
    ], {duration: 3000, fade: 750});*/

    let controller = new ScrollMagic.Controller();
    
   /* let nav = new ScrollMagic.Scene({
        triggerElement: '#aboutUs',
        triggerHook: 1,
        reverse: true,
    })
        .setClassToggle('#siteNav','fade-in')
        .addTo(controller);*/
    let logo = new ScrollMagic.Scene({
        triggerElement: '#intro h1',
        triggerHook: 1,
        reverse: false,
    })
        .setClassToggle('#intro','fade-in')
        .addTo(controller);
    let aboutUs = new ScrollMagic.Scene({
        triggerElement: '#aboutUs',
        triggerHook: 1,
        reverse: false,
    })
        .setClassToggle('#aboutUs','fade-in')
        .addTo(controller);
    let menu = new ScrollMagic.Scene({
        triggerElement: '#menuContent',
        triggerHook: 1,
        reverse: false,
    })
        .setClassToggle('#menu','fade-in')
        .addTo(controller);

});