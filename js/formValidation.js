function validate(){
    if(document.loginForm.Email.value == ""){
        alert("Please provide your email!!");
        document.loginForm.Email.focus();
        return false;
    }
    if(document.loginForm.Password.value == ""){
        alert("Oops!!!! please enter the password");
        document.loginForm.Password.focus();
        return false;
    }

    return (true);
}

function loggingIn(){
    if (validate(this)){Redirect();}
    
}

