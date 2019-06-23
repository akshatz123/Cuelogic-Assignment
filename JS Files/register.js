function checkforblank(){
    var a=0;
    var pwd= document.login.pass.value;
    var lname = document.login.lname.value;
    var email=  document.login.email.value;
    var uname = document.login.uname.value;
    var fname = document.login.fname.value;
    var gender = document.login.gender.value;
    var address = document.login.address.value;
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
    if(a==gender.length){
        document.getElementById('radio').style.borderColor="red";
        return false;
    }
    if (address ==''){
        document.getElementById('address').style.borderColor="red";
    }
    if (fname==''||lname==''||address==''||pwd==''||email=='' ){
        return false;    
    }
}
function address_validate(){
    var address_regex= '^[#.0-9a-zA-Z\s,-]+$';
    var address_result=document.getElementById('address').value.match(address_regex);
    if(!(address_result==true)){
        alert("Pls enter proper address");
    }
}
function fname_validate(){
    var fname =document.getElementById('fname').value;
    var name_regex ='[a-zA-z]';
    var fname_result= fname.match(name_regex);
    if(fname_result){
        alert("Correct Fname");
    }
}
function lname_validate(){
    
    var lname =document.getElementById('lname').value;
    var name_regex ='[a-zA-z]';
    var lname_result= lname.match(name_regex);
    if(lname_result){
        alert("Correct lname");
    }
}

function validation_password(){
    alert("Plz enter with 1 character, 1 lower case 1 upper case, and 1 number  min 8 characters");
    //password validation
    var pwd=document.login.pass.value;
    var passwdregex='^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])$'
    var password_result = pwd.match(passwdregex);
    if(password_result&&(pwd.length > 6)){
        alert("Plz enter with 1 character, 1 lower case 1 upper case, and 1 number  min 8 characters");
        return false;
    }
    console.log("in password_result");
    if(password_result.length<=8)
        alert("Password must be of 8 characters. Please re-enter your Password");
        return false;
    }
 
function ValidateEmail(email) {
    //email validation
    var email= document.login.email.value;
    var emailregex='[a-zA-Z0-9\\+\\.\\_\\%\\-\\]{1,256}\\@[a-zA-z0-9][a-zA-z0-9\\-]{0, 64}(\\[a-zA-Z0-9][a-zA-Z0-9\\-]{0,25})';
    var emailresult = email.match(emailregex);
    if (emailresult){
        return false;
    }
}