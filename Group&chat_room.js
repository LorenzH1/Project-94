var firebaseConfig = {
    apiKey: "AIzaSyA3mm8bfBIwgHiN6BepMzSCXTdLs7YM7FE",
    authDomain: "groupchat-5bd82.firebaseapp.com",
    databaseURL: "https://groupchat-5bd82-default-rtdb.firebaseio.com",
    projectId: "groupchat-5bd82",
    storageBucket: "groupchat-5bd82.appspot.com",
    messagingSenderId: "354213929588",
    appId: "1:354213929588:web:f364bdfead8789a8472721"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function add_room() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    })

    localStorage.setItem("room_name", room_name);

}

function logout() {
    window.location = "index.html";
}