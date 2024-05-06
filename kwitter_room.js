
const firebaseConfig = {
      apiKey: "AIzaSyB43P7bHrEjw8Lf1k5-X-Nrh-pbAod7Wh4",
      authDomain: "kwitter-9a2ed.firebaseapp.com",
      databaseURL: "https://kwitter-9a2ed-default-rtdb.firebaseio.com",
      projectId: "kwitter-9a2ed",
      storageBucket: "kwitter-9a2ed.appspot.com",
      messagingSenderId: "163267580728",
      appId: "1:163267580728:web:0a7d705195efd38cf767cd"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name= localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
       });

       localStorage.setItem("room_name" , room_name);
       window.location = "kwitter_page.html";
}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location ="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location ="index.html";
}