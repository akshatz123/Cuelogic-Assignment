var v ,password, uname, username_result, password_result, pwd, username, pass;
function logins(){
    isLoggedIn=false;
    pass=document.getElementById("pass").value;
    user =document.getElementById('uname').value;
        //username validation
        var userreg = "[A-Za-z]";
        var userresult = user.match(userreg);
        if(!(userresult)){
            document.getElementById("uname").style.borderColor= "Red";
            return false;
        }
        //password validation
        var pass=document.getElementById('pass').value;
        // var passwdregex='^[0-9a-zA-Z@#$%\/^&+=]$';
        var passwdregex ='[a-zA-Z0-9|\W].{6,}';
        var password_result = pass.match(passwdregex);
        if(!(password_result)){
            document.getElementById("pass").style.borderColor= "Red";
            return false;
        }
    if(pass.match(localStorage.getItem("userDetails")) &&  user.match(localStorage.getItem("userDetails"))){
        isLoggedIn = true;
        if(isLoggedIn===true){
            //var current_user=sessionStorage.getItem("userDetails");
            // sessionStorage.setItem(uname,"current_user");
            sessionStorage.setItem('user',user );
            //windows.open('todo.html'," _self");
            }
        }

}