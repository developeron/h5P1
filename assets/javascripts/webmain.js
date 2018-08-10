$(document).ready(function(){
    //firebase config
      // Initialize Firebase
    let config = {
    apiKey: "AIzaSyDktn0Yvc-d2bqpL26RwM_wVK151cwQDRs",
    authDomain: "menuprices-e20ab.firebaseapp.com",
    databaseURL: "https://menuprices-e20ab.firebaseio.com",
    projectId: "menuprices-e20ab",
    storageBucket: "",
    messagingSenderId: "399795751418"
    };
  firebase.initializeApp(config);
  let db = firebase.database();

    db.ref('/Prices/').on('value', function(snapshot){
        $("#chkShawarmaPrice").text(`$${snapshot.val().ChickenShawarma}`);
        console.log(snapshot.val().ChickenShawarma);
    });
 //backstretch.js
 $.backstretch('assets/images/events/basant.jpg');

 //scrollMagic.js

 //$(window).on("resize", function(e) {
     if ($(window).width() >= 768) {
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
     } else if ($(window).width() < 768) {
         $('#intro').css({
             opacity: '1',
             transform: 'translateY(0)',
         });
         $('#aboutUs').css('opacity', '1');
         $('#menu').css('opacity', '1');
     };
});