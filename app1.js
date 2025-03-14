import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, ref, push , set , onValue } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyALirRG-bsw5MjUpc4ogrA66ImTxZr_F68",
  authDomain: "naeem-engineering.firebaseapp.com",
  databaseURL: "https://naeem-engineering-default-rtdb.firebaseio.com",
  projectId: "naeem-engineering",
  storageBucket: "naeem-engineering.appspot.com",
  messagingSenderId: "59660303097",
  appId: "1:59660303097:web:d92f1c2d1614a123af4028"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

console.log(app);
console.log(database);

window.submitbtn = function () {
//    e.preventDefault(); 
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Assuming obj is your data object
  let obj = {
    username: username,
    email: email,
    message: message
  };

  // Push data to the 'Contact' node in your database
  let refren = push(ref(database, 'Contact'));
  let refrenkey = refren.key;
  document.getElementById("username").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
  set(ref(database, `Contact/${refrenkey}`) , obj)
  .then(function () {
    alert('Submit successful')
    console.log('Submit successful');
    
  })
  .catch(function (err) {
    alert('Submit failed' + err.message)
    console.log('Submit failed' + err.message)
  })
 
};
