$(document).ready(function(){
    // Initialize Firebase
    let config = {
        apiKey: "AIzaSyD0_uGZFdDJuOei1DOvNSb7yscti_EWZsk",
        authDomain: "halal5-web-devel-1531335599129.firebaseapp.com",
        databaseURL: "https://halal5-web-devel-1531335599129.firebaseio.com",
        projectId: "halal5-web-devel-1531335599129",
        storageBucket: "halal5-web-devel-1531335599129.appspot.com",
        messagingSenderId: "923111712811"
    };
    firebase.initializeApp(config);
    let db = firebase.database();
//Construct Loyalty Member function:
    let Members = function (emailAdd){
        this.emailAdd = emailAdd;
    };
// LOYALTY PROGRAM: Upon clicking the 'join' button db will be updated with the new user sign up email address
    $('#joinBtn').on('click', function(e){
        e.preventDefault();
        let getEmailAdd = $('#loyalEmail').val().trim(' ');

            // if successfull display the user email has been add to our loyalty program.
            if (getEmailAdd == "" || getEmailAdd == undefined || getEmailAdd == " ") {
                $('#loyalMsg').text('Please enter a valid email address!');
            } else {
                let newSignUp = new Members (getEmailAdd);
                //Update DB with new member email address
                db.ref('/users/').push(newSignUp);
                //Display success message
                $('#loyalMsg').text(`Thank You! Your email address: ${getEmailAdd} has been added to our loyalty program`)
            }
        //empty the input
        $('#loyalEmail').val('');
    });

    //Invoke modal
    $(".cateringBtn").click(function(){
        $("#myModal").modal();
    });

    //backstretch.js
    $.backstretch('assets/images/events/basant.jpg');

    //scrollMagic.js

    //$(window).on("resize", function(e) {
        if ($(window).width() > 768) {
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
        }else if ($(window).width() < 768) {
            $('#intro').css({
                opacity: '1',
                transform: 'translateY(0)',
            });
            $('#aboutUs').css('opacity', '1');
            $('#menu').css('opacity', '1');
        }


});