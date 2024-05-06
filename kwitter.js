function login(){
    addUser = document.getElementById("addUser").value;
    localStorage.setItem("username", addUser);
    window.location = "kwitter_room.html";
}