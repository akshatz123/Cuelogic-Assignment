var password, username, username_result, password_result;
function logins(){
    // check empty field
    if (username==''){
        document.getElementById('uname').style.borderColor="red";
    }
    if (password== ''){
        document.getElementById('pass').style.borderColor="red";
    }
    if (password==''||username==''){
        return false;    
    }

    //password validation
    password=document.login.pass.value;
    var passwdregex='[a-zA-Z0-9|\W].{6,}';
    password_result = pwd.match(passwdregex);
    if (!(password_result)){
        return false;
    }
    //username validation
    var userregex ='[A-Za-z]';
    username_result = document.getElementById('uname').value.match(userregex);
    if (!(username_result)){
        return false;
    }
    if(password_result.match(localStorage.getItem())){
        console.log("in match password");
    }    
    localStorage.getItem('userDetails');
    JSON.parse(storedName);
    for(var i = 0; i <= userDetails.length; i++){
        if(userDetails[i].pass === password && userDetails[i].uname === username){
            console.log('in for loop');
            alert('You are logged in.');
            return true;
        }
    }
}