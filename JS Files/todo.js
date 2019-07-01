var  user_name, user, Todo12, ToDO, duedate, reminder, categories, isChecked;
//Add function
var ToDo_array = JSON.parse(localStorage.getItem("userDetails"));
 function newElement() {
  var description1= document.getElementById("description").value;
    var reminder= document.getElementById("date").value;
    var duedate=document.getElementById("duedate").value;
    var categories=document.getElementById("categories").value;
    var todoObj = {
      "Description": description1,
      "Reminder": reminder,
      "Due_Date":duedate,
      "Categories":categories
  }
 //local storage
 user_name = sessionStorage.getItem("user"); //fetch data from session storage
      var ToDo_array = JSON.parse(localStorage.getItem("userDetails"));
      for(var i = 0; i < ToDo_array.length; i++)
      {
        if(user_name == ToDo_array[i].Username)   // username found then break
        {
          ToDo_array[i].ToDO.push(todoObj);
          break;
        }
      }
       localStorage.setItem("userDetails",JSON.stringify(ToDo_array));
  }
//Display function  
function display_element()
{
  var Todo12 = JSON.parse(localStorage.getItem("userDetails"));
    //var is_public = document.getElementById("is_public").value;
    var todaoList = [];
    user_name = sessionStorage.getItem("user"); //fetch data from session storage
    for(var i = 0; i < Todo12.length; i++)
    {
      if(user_name == Todo12[i].Username)   // username found then break
      {
        todaoList = Todo12[i].ToDO;
        break;
      }
    }

    for( var i=0 ;i<todaoList.length;i++ ) {
      var td1=document.createElement("tr"); 
      var row ="<tr><td><input type ='checkbox' id='selectedcheckbox'/></td><td>"+todaoList[i].Description+"</td><td>"+todaoList[i].Reminder+"</td><td>"+todaoList[i].Due_Date+"</td><td>"+todaoList[i].Categories+"</td></tr>";
      td1.innerHTML=row;
      var table_head = document.getElementById("table_body");
      table_head.appendChild(td1);
}
}
//Delete Function
function onDelete(){
  var sessionID=sessionStorage.getItem("user");
  var user= JSON.parse(localStorage.getItem("userDetails"));
//  console.log(user);
  var user_name =sessionStorage.getItem("user");
  for(var index=0; index < user.length; index++){
    console.log(user[index].Username);
    console.log(sessionID)
    if(user[index].Username==sessionID){
    user_name=index;
  }
}
Todo12=JSON.parse(localStorage.getItem("userDetails"));
console.log(index);  
console.log(user);
var u1 = user[index].length-1
console.log(u1)
//console.log(ToDO.length);

var selected_checkbox=document.getElementById("selectedcheckbox");
  for(var icount = u1; icount >= 0; icount--){
    if(selected_checkbox[icount].checked===true){
      user[index].Todo12[i].splice(icount,1);
    }
  }
  localStorage.setItem("userDetails",JSON.stringify(user));
  }
//logout function 
function onSubmit(){
  sessionStorage.clear();
  alert("Your session Expired. Please relogin to complete the transaction.");
  window.location="login.html";
}
function profile(){
  window.location='profile.html';
}