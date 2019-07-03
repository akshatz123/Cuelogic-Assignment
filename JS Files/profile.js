profile=localStorage.getItem("userDetails");
profile1=JSON.parse(profile);
var uname=profile1.Username;
users = localStorage.getItem('userDetails');
var user1 = JSON.parse(users);
    
function logout(){
    sessionStorage.clear();
}
function edit(){
    document.getElementById("fname").disabled=false;
    document.getElementById("lname").disabled=false;
    document.getElementById("Address").disabled=false;
  }
function save(){
    for( index=0;index<user1.length;index++){
        if(user1[index].uname === sessionStorage.getItem('user')){
            user1[index].fname = fname;
            user1[index].lname = lname;
            user1[index].Address = Address;
            user1[index] = JSON.stringify(user1[index]);
        }
        
        localStorage.setItem('userDetails',);
        document.getElementById("fname").disabled = true;
        document.getElementById("lname").disabled = true;
        document.getElementById("Address").disabled = true;
        for (var i=0; i<document.getElementsByName("gender").length;i++){
            document.forms.gender[i].value.disabled =true;
        }
    }    
}
//view profile
function viewProfile(){
    for (var i=0; i< profile.length; i++){
        document.getElementById("fname").value=profile1[i].FirstName;
        document.getElementById("lname").value=profile1[i].LastName;
        document.getElementById("Address").value=profile1[i].Address;
        break;
    }
}
function changeGender(){
    if( document.getElementsByName("gender").checked){
        document.getElementById("male").removeAttribute("disabled");
        document.getElementById("female").removeAttribute("disabled");
    } 
    else{
        document.getElementById("male").disabled =true;
        document.getElementById("female").disabled =true
    }
}