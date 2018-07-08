$(document).ready(function(){
    $(window).scroll(function() {
        if ($(document).scrollTop() > 500) {
            $('#siteNav').css({
                'background-color': '#efcc31',
                'box-shadow': 'box-shadow: 2px 0px 10px #0000003e'
            });
        } else {
            $('#siteNav').css('background-color', 'transparent');
        }
    })

    $.backstretch('assets/images/events/basant.png')
    /*$('.bg').backstretch([
        "assets/images/events/basant.png"
      , "assets/images/entrees/beefOverRice.jpg"
      , "assets/images/events/basant.jpg"
    ], {duration: 3000, fade: 750});*/

    let controller = new ScrollMagic.Controller();
    let logo = new ScrollMagic.Scene({
        triggerElement: '#intro h1',
        triggerHook: 1,
        reverse: false,
    })
        .setClassToggle('#intro','fade-in')
        .addTo(controller);

});