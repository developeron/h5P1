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
    $('.bgEvents').backstretch('assets/images/eventsBg.png');


});