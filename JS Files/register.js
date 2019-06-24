var pwd= document.login.pass.value;
var lname = document.login.lname.value;
var email=  document.login.email.value;
var uname = document.login.uname.value;
var fname = document.login.fname.value;
var gender = document.login.gender.value;
var address = document.login.address.value;
function check_for_blank(){
    if (email==''){
        document.getElementById('email').style.borderColor="red";
    }
    if (pwd==''){
        document.getElementById('pass').style.borderColor="red";
    }
    if (fname==''){
        document.getElementById('fname').style.borderColor="red";
    }
    if (uname ==''){
        document.getElementById('uname').style.borderColor="red";
    }
    if (lname ==''){
        document.getElementById('lname').style.borderColor="red";
    }
    if((gender.length)==''){
        document.getElementById('radio').style.borderColor="red";
    }
    if (address ==''){
        document.getElementById('address').style.borderColor="red";
    }
    if (fname==''||lname==''||address==''||pwd==''||email=='' ){
        return false;
    }


function address_validate(){
    var address_regex= '^[#.0-9a-zA-Z\s,-]+$';
    var add =document.getElementById('address').value;
    var address_result=add.match(address_regex);
    if((address_result)){
        return;
    }
}
function fname_validate(){
    var fname =document.getElementById('fname').value;
    let name_regex ='[a-zA-z]';
    var fname_result= fname.match(name_regex);
    if((fname_result)){
        return;
    }
}

function lname_validate(){
    var lname = document.getElementById('lname').value;
    var lname_result = lname.match(fname_validate.name_regex);
    if((lname_result)){
        return;
    }
}

function validation_password(){
    //password validation
    var pwd=document.login.pass.value;
    var passwdregex='^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])$'
    var password_result = pwd.match(passwdregex);
    if((password_result)){
        return;
    }
}
function ValidateEmail(email) {
    //email validation
    var email= document.login.email.value;
    var emailregex='[a-zA-Z0-9\\+\\.\\_\\%\\-\\]{1,256}\\@[a-zA-z0-9][a-zA-z0-9\\-]{0, 64}(\\[a-zA-Z0-9][a-zA-Z0-9\\-]{0,25})';
    var emailresult = email.match(emailregex);
    if((emailresult)){
        return;
    }
}
function ValidateUsername(){
    var user =document.login.uname.value;
    var userreg = [A-Za-z];
    if(user.match(userreg)){
        return;
    }
}
//Local Storage
var userdetails = new Array ("lname", "pwd", "address", "uname", "email", "fname", "gender");

if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("last Name","lname.value");
    localStorage.setItem("fname", "fname.value");
    localStorage.setItem("pwd", "pass.value");  
    localStorage.setItem("address", "address.value"); 
    localStorage.setItem("uname", "uname.value");
    localStorage.setItem("email", "email.value");
    localStorage.setItem("gender", "gender.value");
    return userdetails;
}
function OnSubmit(){
    window.location.href = 'http://www.google.com'; //Will take you to Google.
}
check_for_blank();
check_for_blank.validation_password;
check_for_blank.ValidateUsername;
check_for_blank.address_validate;
}
