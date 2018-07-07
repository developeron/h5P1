$(document).ready(function(){
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