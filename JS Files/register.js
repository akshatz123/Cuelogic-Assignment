var pwd;
var lname;
var email;
var uname;
var fname;
var gender;
var address;
var JSON1;
function check_for_blank(){
    if ((email=  document.login.email.value)==''){
        document.getElementById('email').style.borderColor="red";
    }
    if ((pwd = document.login.pass.value)==''){
        document.getElementById('pass').style.borderColor="red";
    }
    if ((fname=  document.login.fname.value)==''){
        document.getElementById('fname').style.borderColor="red";
    }
    if ((uname=  document.login.uname.value) ==''){
        document.getElementById('uname').style.borderColor="red";
    }
    if ((lname = document.login.lname.value) ==''){
        document.getElementById('lname').style.borderColor="red";
    }
    if((gender=  document.login.gender.value) ==''){
        document.getElementById('radio').style.borderColor="red";
    }
    if ((address=  document.login.address.value) ==''){
        document.getElementById('address').style.borderColor="red";
    }
    if (fname==''||lname==''||address==''||pwd==''||email=='' ){
        return false;
    }

    //Address Validation
    var address_regex= '^[#.0-9a-zA-Z\s,-]+$';
    var add =document.getElementById('address').value;
    var address_result=add.match(address_regex);
    if(!(address_result)){
        document.getElementById("address").style.borderColor= "Red";
        return false;
    }
    
    // Firstname Validation
    fname =document.getElementById('fname').value;
    var name_regex ='[a-zA-z]';
    var fname_result= fname.match(name_regex);
    if(!(fname_result)){
        document.getElementById("fname").style.borderColor= "Red";
        return false;
    }
    
    //lastname validation
    lname = document.getElementById('lname').value;
    var lname_result = lname.match(name_regex);
    if(!(lname_result)){
        document.getElementById("lname").style.borderColor= "Red";
        return false;
    }

    //password validation
    pwd=document.getElementById('pass').value;
    // var passwdregex='^[0-9a-zA-Z@#$%\/^&+=]$';
    var passwdregex ='[a-zA-Z0-9|\W].{6,}';
    var password_result = pwd.match(passwdregex);
    if(!(password_result)){
        document.getElementById("pass").style.borderColor= "Red";
        return false;
    }

    //email validation
    var email= document.login.email.value;
    // var emailregex='[a-zA-Z0-9\\+\\.\\_\\%\\-\\]{1,256}\\@[a-zA-z0-9][a-zA-z0-9\\-]{0, 64}(\\[a-zA-Z0-9][a-zA-Z0-9\\-]{0,25})';
    var emailregex='^\w+@[a-zA-Z_]+?\.[a-zA-Z]';
    var emailresult = email.match(emailregex);
    if(!(emailresult)){
        return false;
    }

    //username validation
    var user =document.getElementById('uname').value;
    var userreg = "[A-Za-z]";
    var userresult = user.match(userreg);
    if(!(userresult)){
        document.getElementById("uname").style.borderColor= "Red";
        return false;
    }

//Local Storage
var DB =[];

if (typeof(Storage) !== "undefined") {
    var obj = {
    FirstName :   fname,
    Address:  address,
    Password:    pass.value,
    Gender:   gender,
    Email:    email,
    Username:    uname,
    LastName :   lname
};

DB.push(obj);
var myJSON= JSON.stringify(DB);
// let s1 = JSON.parse(obj);
localStorage.setItem("userDetails", myJSON);
}}