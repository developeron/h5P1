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
    //Invoke franModal
    $("#franInfo").click(function(){
        $("#franModal").modal();
    });
//CONTACT US
// on Click event => update the location's relative address | hours 

//$('#h5Bellfort').on('click', function(){
    $(document).on('click', '#locations', function(event){
        event.preventDefault;
        console.log($(this).val());
        if($(this).val() === 'Halal5 W. Bellfort Truck'){
            $('#contactInfo').html(`
            <h2 id="contactHeader">Come See Us</h2>
            <h4>
            10714 West Bellfort St.<br>
            Houston, Texas 77099<br>
            </h4>
            <h4><span class="glyphicon glyphicon-phone"></span> 832.617.7817</h4>
            <h4><a href="mailto:info@halal5.com?subject=Question&body=Hi!"><span class="glyphicon glyphicon-envelope"></span> info@halal5.com</a></h4>
            <h4><a href="#franchise"><span class="glyphicon glyphicon-globe"></span> Franchise Info.</a></h4>
            <h4><span class="glyphicon glyphicon-time"></span> Hours<br><h5>Sunday - Saturday: 11AM - 12AM</h5></h4>
            `);
        }else if ($(this).val() === 'Halal5 Restaurant') {
                $('#contactInfo').html(`
                <h2 id="contactHeader">Come See Us</h2>
                <h4>
                3730-B S Gessner Rd<br>
                Houston, Texas 77063<br>
                </h4>
                <h4><span class="glyphicon glyphicon-phone"></span> 281.974.3918</h4>
                <h4><a href="mailto:info@halal5.com?subject=Question&body=Hi!"><span class="glyphicon glyphicon-envelope"></span> info@halal5.com</a></h4>
                <h4><a href="#franchise"><span class="glyphicon glyphicon-globe"></span> Franchise Info.</a></h4>
                <h4><span class="glyphicon glyphicon-time"></span> Hours<br><h5>Monday - Saturday: 11AM - 10PM | Sunday: Closed</h5></h4>
            `);
        } else if ($(this).val() === 'Halal5 Harwin Truck'){
            $('#contactInfo').html(`
            <h2 id="contactHeader">Come See Us</h2>
            <h4>
            6820 Harwin Dr.<br>
            Houston, Texas 77063<br>
            </h4>
            <h4><span class="glyphicon glyphicon-phone"></span> 713.998.0837</h4>
            <h4><a href="mailto:info@halal5.com?subject=Question&body=Hi!"><span class="glyphicon glyphicon-envelope"></span> info@halal5.com</a></h4>
            <h4><a href="#franchise"><span class="glyphicon glyphicon-globe"></span> Franchise Info.</a></h4>
            <h4><span class="glyphicon glyphicon-time"></span> Hours<br><h5>Sunday - Saturday: 11AM - 12AM</h5></h4>
            `);
        }
    });

    //backstretch.js
    $('.bgEvents').backstretch('assets/images/eventsBg.png');


});