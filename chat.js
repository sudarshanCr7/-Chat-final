const firebaseConfig = {
    apiKey: "AIzaSyDsvTcv8rFWoRRISnAgvjlyYAokSOvllwk",
    authDomain: "chat-app-2a24d.firebaseapp.com",
    databaseURL: "https://chat-app-2a24d-default-rtdb.firebaseio.com",
    projectId: "chat-app-2a24d",
    storageBucket: "chat-app-2a24d.appspot.com",
    messagingSenderId: "159233264070",
    appId: "1:159233264070:web:2dac7add8aa8a3738ecac7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function send(){
    msg=document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
      
        });
        document.getElementById("msg").value="";
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
  console.log(firebase_message_id);
  console.log(message_data);
  name = message_data['name'];
  message = message_data['message'];

  name_with_tag = "<h4> "+name+" :"+message+" </h4>";
row=name_with_tag+"<hr>";
    document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();