var pwd, uname;
function logins(){
    // check empty field
    pwd=document.login.pass.value;
    email= document.login.email.value;
    if (email==''){
        document.getElementById('email').style.borderColor="red";
    }
    if (pwd==''){
        document.getElementById('pass').style.borderColor="red";
    }
    if (pwd==''||email==''){
        return false;    
    }
}
//password validation
function validation_password(){
    pwd=document.login.pass.value;
    passwdregex='[a-zA-Z0-9|\W].{6,}';
    password_result = pwd.match(passwdregex);
    if (!(password_result)){
        return false;
    }
}
//username validation
function username_validation(){
    userregex ='[A-Za-z]';
    username_result = document.login.uname.value.match(userregex);
    if (!(username_result)){
        return false;
    }
}