$(document).ready(function(){
    $(".cateringBtn").click(function(){
        $("#myModal").modal();
    });
    //backstretch.js
    $.backstretch('assets/images/events/basant.jpg');
    //scrollMagic.js
    let controller = new ScrollMagic.Controller();
    
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