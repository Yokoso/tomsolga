// Initialize Firebase
const config = {
  apiKey: "AIzaSyBRLRQDWfzDph7wNlNHt5L3-liL4oW_zb0",
  authDomain: "portfolio-contact-form-95785.firebaseapp.com",
  databaseURL: "https://portfolio-contact-form-95785.firebaseio.com",
  projectId: "portfolio-contact-form-95785",
  storageBucket: "portfolio-contact-form-95785.appspot.com",
  messagingSenderId: "243967031318"
};
firebase.initializeApp(config);

// Reference messages collection
let messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  let name = getInputVal('name');
  let email = getInputVal('email');
  let message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
}
