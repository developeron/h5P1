(function(){
    emailjs.init("user_Wfq5KUfJkwxLTMzVkHuIc");
 })();
 window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('gmail', 'contact_form', this);
        document.getElementById('usrname').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telInput').value = '';
        document.getElementById('eventLoc').value = '';
        document.getElementById('eventDate').value = '';
        document.getElementById('numGuests').value = '';
        document.getElementById('cateringMsg').value = '';

    });
};