function store() {
    var name = document.getElementById('username').value;
    var pw = document.getElementById('password').value;
    localStorage.setItem('username', name.value);
    localStorage.setItem('password', pw.value);
}

function check() {

    var storedName = localStorage.getItem('username').value;
    var storedPassword = localStorage.getItem('password').value;
    var userName = document.getElementById('registeredUser').value;
    var userPassword = document.getElementById('registeredPW').value;

    if(userName.value == storedName && userPassword.value == storedPassword) {
        alert('You are loged in.');
        window.location.href = 'Characters.html'
    }
    else {
        alert('ERROR.');
    }
}