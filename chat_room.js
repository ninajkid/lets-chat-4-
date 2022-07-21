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
  
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";


  function addRoom(){
    room_name=document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="chat_page.html";
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
     console.log("Room name-"+Room_names);
     row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="chat_page.html";
}
function logout(){
    window.location="index.html";
}