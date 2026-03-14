function login(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(email === "" || password === ""){
alert("Please enter email and password");
return;
}

localStorage.setItem("user", email);

alert("Login successful!");

window.location.href = "index.html";

}
