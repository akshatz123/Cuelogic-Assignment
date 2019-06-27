var pwd = '';
var lname = '';
var uname = '';
var fname = '';
var gender = '';
var address = '';
function check_for_blank(){
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
    if (fname==''||lname==''||address==''||pwd==''||gender==''||uname==''){
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

    //username validation
    var user =document.getElementById('uname').value;
    var userreg = "[A-Za-z]";
    var userresult = user.match(userreg);
    if(!(userresult)){
        document.getElementById("uname").style.borderColor= "Red";
        return false;
    }

    var userDetails = [];
    var obj = {
        "FirstName" :   fname,
        "Address":  address,
        "Password":    pass.value,
        "Gender":   gender,
        "Username":    uname,
        "LastName" :   lname
        };
    console.log(localStorage.getItem("userDetails"));
    if (localStorage.getItem("userDetails")) {
        userDetails = JSON.parse(localStorage.getItem("userDetails"));
        var isUserExists = false;
        for (i=0; i <= userDetails.length; i++){
            if (userDetails[i]['Username'] == user){
                isUserExists = true;
            }  
        }

        if (isUserExists) {
           alert('user With same name alredy exists.');
            document.getElementById('uname').value='';
            return false;
        } 
        else {
            userDetails.push(obj);
            var string = JSON.stringify(userDetails);
            localStorage.setItem("userDetails", string);
            return true;
        }
    }
    else {
        userDetails.push(obj);
        var string = JSON.stringify(userDetails);
        localStorage.setItem("userDetails", string);
        return true;
    }
             
}   
function registration(){
    if (check_for_blank()){
        alert("Successfully Registered");
        document.getElementById().value='';
        window.open('login.html', _self);
    } else {
        alert('Something went wrong');
    }
}
