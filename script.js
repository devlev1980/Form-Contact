// Initialize Firebase
var config = {
    apiKey: "AIzaSyA_BE3SVq2Pl9nf8dpZzq20pvKCJV20HOM",
    authDomain: "form-contact-firebase.firebaseapp.com",
    databaseURL: "https://form-contact-firebase.firebaseio.com",
    projectId: "form-contact-firebase",
    storageBucket: "",
    messagingSenderId: "541634078471"
};
firebase.initializeApp(config);

//reference Messages collection

var messageRef = firebase.database().ref('messages')

//listen for form submit

document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit Form 
function submitForm(event) {
    event.preventDefault();
    // console.log(123)

    //Get Values of inputs

    var name = getInputValues('name');
    var company = getInputValues('company');
    var email = getInputValues('email');
    var phone = getInputValues('phone');
    var message = getInputValues('message');

    // console.log(name);

    //save Message
    saveMessages(name, company, email, phone, message);

    //show Alert
    document.querySelector('.alert').style.display = 'block';

    //Hide Alert after 3s

    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000)

    //reset Form values

    document.getElementById('contactForm').reset();




}

//get Form Values
function getInputValues(id) {
    return document.getElementById(id).value;
}
//Save messages to Firebase
function saveMessages(name, company, email, phone, message) {
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message

    })
}