var firebaseConfig = {
    apiKey: "AIzaSyDkkGBAyT5pBx2nm69zDqruYrJbQKx-MJc",
    authDomain: "kwitter-cd5fe.firebaseapp.com",
    databaseURL: "https://kwitter-cd5fe-default-rtdb.firebaseio.com",
    projectId: "kwitter-cd5fe",
    storageBucket: "kwitter-cd5fe.appspot.com",
    messagingSenderId: "407159627831",
    appId: "1:407159627831:web:b828a3f16119728080dfb2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

user_name = localStorage.getItem("user_name"); 
room_name = localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value="";
}