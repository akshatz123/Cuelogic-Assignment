profile=localStorage.getItem("userDetails");
profile1=JSON.parse(profile);
var uname=profile1.Username;
function logout(){
    sessionStorage.clear();
}
function edit(){
    document.getElementById("fname").disabled=false;
    document.getElementById("lname").disabled=false;
    document.getElementById("Address").disabled=false;
    users = localStorage.getItem('userDetails');
    var user1 = JSON.parse(users);
    for( index=0;index<user1.length;index++){
          if(user1[index].uname === sessionStorage.getItem('user')){
            var itr = index;
    }
    // document.getElementById("f_name").disabled = true;
    // document.getElementById("l_name").disabled = true;
    // document.getElementById("add_ress").disabled = true;
    // document.getElementsByClassName("gender").disabled = true;
  }
    console.log('index', itr);
    user1[itr].fname = f_name;
    user1[itr].lname = l_name;
    user1[itr].address = add_ress;
    user1 = JSON.stringify(user1);
    localStorage.setItem('users',user1);
    }
    
//view profile
function viewProfile(){
    for (var i=0; i< profile.length; i++){
        unameSession=uname;
        //document.getElementsByName("gender").value=profile[i].gender
        document.getElementById("Address").value=profile1[i].Address;
        document.getElementById("lname").value=profile1[i].LastName;
        document.getElementById("fname").value=profile1[i].FirstName;
        break;
    }
    location.reload;
}
