function pasuser(form) {
    if (form.userName.value=="user1") { 
    if (form.password.value=="password") {              
    location="Characters.html" 
    } else {
    alert("Invalid Password")
    }
    } else {  alert("Invalid UserID")
    }
    }