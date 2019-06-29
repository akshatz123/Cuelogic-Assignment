function logout(){
    sessionStorage.clear();
}
localStorage.getItem("userDetails");
function edit(){
    document.getElementById("fname").readOnly=false;
    document.getElementById("lname").readOnly=false;
    document.getElementById("address").readOnly=false;
}