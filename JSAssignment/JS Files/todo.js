Todo12 = JSON.parse(localStorage.getItem("userDetails"));
var  user_name, user, duedate, reminder, categories, isChecked;

// var ToDo_array = JSON.parse(localStorage.getItem("userDetails"));
//Add function
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
      for(var i = 0; i < Todo12.length; i++)
      {
        if(user_name == Todo12[i].Username)   // username found then break
        {
          Todo12[i].ToDO.push(todoObj);
          break;
        }
      }
       localStorage.setItem("userDetails",JSON.stringify(Todo12));
  }
//Display function  
function display_element()
{

    //var is_public = document.getElementById("is_public").value;
    var todoList = [];
    user_name = sessionStorage.getItem("user"); //fetch data from session storage
    for(var i = 0; i < Todo12.length; i++)
    {
      if(user_name == Todo12[i].Username)   // username found then break
      {
        todoList = Todo12[i].ToDO;
        break;
      }
    }

    for( var i=0 ;i<todoList.length;i++ ) {
      var input= document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("id", "selectedcheckbox"+i);
      var td1=document.createElement("tr");
      var row ="<tr><td><input type ='checkbox' id='selectedcheckbox'/></td><td>"+todoList[i].Description+"</td><td>"+todoList[i].Reminder+"</td><td>"+todoList[i].Due_Date+"</td><td>"+todoList[i].Categories+"</td></tr>";
      td1.innerHTML=row;
      var table_head = document.getElementById("table_body");
      table_head.appendChild(td1);
}
}
//Delete Function
function onDelete(){
  // var j=0;
  var checker =0;
  var todoList;
  var check = document.getElementById("selectedcheckbox");
  var table = document.getElementById("table_body");
  for(var i = 0; i < Todo12.length; i++)
  {
    if(user_name == Todo12[i].Username)   // username found then break
    {
      todoList = Todo12[i].ToDO;
      break;
    }
  }
  // // console.log(todoList.length)
  for(var i=todoList.length-1;i>=0;i--){ 
        // console.log(document.getElementById("selectedcheckbox"));
        //for(var j= check[i].checked ;j<=check[i].checked.length-1; j++){
          check.checked=true;
          if(check.checked == true){
            // console.log(i);  
            checker+=1;
            table.deleteRow(i);
            todoList.splice(i,1);
            localStorage.setItem("T",JSON.stringify(todoList));
            location.reload();    
          console.log(checker);;
        }
        }
      
  var inputs = document.querySelectorAll('selectedcheckbox');
  for (var i = 0; i < inputs.length; i++) {
    
    if(inputs[i].checked == true)
    console.log(inputs[i]);
  break;  }
    }
//logout function 
function onSubmit(){
  sessionStorage.clear();
  alert("Your session Expired. Please relogin to complete the transaction.");
  window.location="login.html";
}
function profile(){
  window.location.href='profile.html';
}