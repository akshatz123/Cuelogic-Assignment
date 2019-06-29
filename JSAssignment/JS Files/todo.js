var  index, user_name, user;
function newElement() {
  
  var description=document.getElementById("description").value;
  var reminder=document.getElementById("date").value;
  var duedate=document.getElementById("due-date").value;
  var categories=document.getElementById("categories").value;
  var todoObj = {
    "Description": description,
    "Reminder": reminder,
    "Due Date":duedate,
    "Categories":categories
  }
  //local storage
  user_name = sessionStorage.getItem('user'); 
  console.log(sessionStorage.getItem('user'))//fetch data from session storage
      todoObj = document.getElementById("Add").value;
      var TodoItem = JSON.parse(localStorage.getItem("userDetails"));
      for(var index = 0; index < TodoItem.length; index++)
      {
        console.log(`IN for loop`);
        if(user_name == TodoItem[index].user)   // username found then break
        {
          //console.log(TodoItem[index].user);
          TodoItem[index].todo_list.push(todoObj);
          //console.log(TodoItem[index].todo_list.push(TodoItem));
localStorage.setItem("userDetails",JSON.stringify(TodoItem));
          //console.log(JSON.stringify(TodoItem));
        }
      }

  }

 
function onSubmit(){
  sessionStorage.clear();
  alert("Your session Expired. Pls relogin to complete the transaction.");
  window.location="login.html";
}
function profile(){
  sessionStorage=false;
  window.location.href='profile.html';
}