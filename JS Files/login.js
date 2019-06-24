function logins(){
    // check empty field
    var pwd=document.login.pass.value;
    var email= document.login.email.value;
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

function validation_password(){
    //password validation
    var pwd=document.login.pass.value;
    var passwdregex='(?=.*[0-9])[a-z][A-Z][@#$%^&+=])$'
    var password_result = pwd.match(passwdregex);
    if (password_result){
        return;
}
}
function username_validation(){
    var userregex ="[A-Za-z]";
    var username_result = document.login.uname.value.match(userregex);
    if (username_result){
        return;
    }
}
var Obj=new Object();
Obj.stdpwd=getItem("pwd");
Obj.stduname=getItem("uname");