var user_array = JSON.parse(localStorage.getItem("userDetails"));
var session = sessionStorage.user;
var input = document.createElement("input");

for(var index = 0; index < user_array.length; index++)
{
  if(session == user_array[index].Username)   // username found then break
  {
    userid =index;
    break;
  }
}

var todo_array=user_array[userid].ToDO;

input.setAttribute("type", "checkbox");
input.setAttribute("class", "selectedcheckbox");
var check = document.getElementsByClassName("selectedcheckbox");
//Edit ToDO

function edit(IdofElement){
 alert(IdofElement);
  var todoid =0;
  for(var index = 0; index < todo_array.length; index++){
    if(todo_array.TodoId == IdofElement)
    {
      var todoid = index;
      alert(todoid);
    }
      document.getElementById("description").value = todo_array[todoid].Description;
      document.getElementById("categories").value = todo_array[todoid].Categories;
      document.getElementById("due_date").value = todo_array[todoid].due_date;
      document.getElementById("reminder").value = todo_array[todoid].Reminder;
}
}
//Save ToDO

function save(IdofElement){
  alert(IdofElement);
  var description2= document.getElementById("description").value;
  var categories = document.getElementById("categories").value;
  var due_date2 = document.getElementById("due_date").value;
  var reminder2 = document.getElementById("reminder").value;
  for(var i=0; i <= parsedUser.length; i++){
    parsedUser[index].todoList[todoID].Description = description2;
    parsedUser[index].todoList[todoID].Categories = category2;
    parsedUser[index].todoList[todoID].due_date = due_date2;
    parsedUser[index].todoList[session].Reminder = reminder2;
    parsedUser = JSON.stringify(parsedUser);
    localStorage.setItem('userDetails',parsedUser);
    window.location.reload();
  }
}
//Filter
// function displayoption(){
//   document.getElementById("filterbtncategory").style.display="inline";
//   document.getElementById("filterbtnstatus").style.display="inline";
//   document.getElementById("filterbtn").style.display="none";
// }
// //Filter by category
// function displayoptioncategory(){
//    if(document.getElementById("filterbtnstatus").style.display == "none")
//    {
//        document.getElementById("filterbtnstatus").style.display="inline";
//        document.getElementById("filteroptioncategory").style.display="none";
//    }
//    else{
//        document.getElementById("filterbtnstatus").style.display="none";
//    document.getElementById("filteroptioncategory").style.display="inline";
//    }
//
// }
// //Filter by Status
// function displayoptionstatus(){
//    if(document.getElementById("filterbtncategory").style.display == "none")
//    {
//        document.getElementById("filterbtncategory").style.display="inline";
//        document.getElementById("filteroptionstatus").style.display="none";
//    }
//    else{
//        document.getElementById("filterbtncategory").style.display="none";
//        document.getElementById("filteroptionstatus").style.display="inline";
//    }
//
// }
