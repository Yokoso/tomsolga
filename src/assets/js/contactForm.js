// Initialize Firebase
const config = {
  apiKey: configs.apiKey,
  authDomain: configs.authDomain,
  databaseURL: configs.databaseURL,
  projectId: configs.projectId,
  storageBucket: configs.storageBucket,
  messagingSenderId: configs.messagingSenderId
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
