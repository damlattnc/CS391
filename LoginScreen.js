function store() {
    var name = document.getElementById('username').value;
    var pw = document.getElementById('password').value;
    localStorage.setItem('username', name.value);
    localStorage.setItem('password', pw.value);
}

function login(form) {

    var storedName = localStorage.getItem('username').value;
    var storedPassword = localStorage.getItem('password').value;
    var userName = document.getElementById('registeredUser').value;
    var userPassword = document.getElementById('registeredPw').value; 

    if (form.registeredUser.value=="admin") { 
        if (form.registeredPw.value=="password") {    
            alert("Logged in as admin.")          
            location="Characters.html" 
        } else {
            alert("Invalid Password")
        }
        }

    else if(userName.value == storedName && userPassword.value == storedPassword) {
        alert('You are logged in.');
        window.location.href = 'Characters.html'
    }
    else {
        alert("Invalid UserID");
    }}