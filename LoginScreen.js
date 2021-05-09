function store() {
    var Users = ["damla", "alanur", "murat"];
    var Passwords = ["1234", "12345", "abcd"]
    localStorage.setItem("Users", JSON.stringify(Users))

    var name = document.getElementById('username').value;
    var pw = document.getElementById('password').value;
    Users.push(name);
    Passwords.push(pw);

    alert(name + "  Thanks for registration. \nTry to login Now");
}

function login() {

    var Users = JSON.parse(localStorage.getItem("Users"));
    var Passwords = JSON.parse(localStorage.getItem("Passwords"));
    var userName = document.getElementById('registeredUser');
    var userPassword = document.getElementById('registeredPw');

    //admin login

    if(userName == "Admin" && userPassword == "123456"){
        alert ('You are logged in.');
    }
    
    else{

    for (var i = 0; i < Users.length; i++) {
    if (userName == Users[i] && userPassword == Passwords[i]) {
        alert ('You are logged in.');
        window.location.href = 'Characters.html' 
        break;
    }
    alert('Login unsuccessful.');
    }
}}