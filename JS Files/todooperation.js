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
    if(todo_array.TodoId == IdofElement){
      var todoid = index;
      alert(todoid);
      }
      document.getElementById("description").value = todo_array[todoid].Description;
      document.getElementById("categories").value = todo_array[todoid].Categories;
    //  document.getElementById("due_date").value = todo_array[todoid].due_date;
      document.getElementById("reminder").value = todo_array[todoid].Reminder;
    }
}
//Save ToDO

function save(IdofElement){
  let todoid;
  alert(IdofElement);
  for(var index = 0; index < todo_array.length; index++){
    if(todo_array[index].TodoId === IdofElement){
         todoid = index;
      alert(todoid);
      }
  var Description2= document.getElementById("description").value;
  var Categories = document.getElementById("categories").value;
//  var due_date2 = document.getElementById("due_date").value;
  var Reminder2 = document.getElementById("reminder").value;

    user_array[userid].ToDO[todoid].Description = Description2;
    user_array[userid].ToDO[todoid].Categories = Categories;
    // user_array[index].todoList[todoid].due_date = due_date2;
    user_array[userid].ToDO[todoid].Reminder = Reminder2;
    user_array = JSON.stringify(user_array);
    localStorage.setItem('userDetails',user_array);
    window.location.reload();

}
}
//Filter By Category
function search(){
  // var userArray =
  var filteredarray = new Array();
    if(document.getElementById("categorylist").value ==="personal")
    {
       filteredarray=userArray.filter(function(category1)
       {
         return(category1.category=== "personal");
       }
     )
      for (var counter = 0; counter<filteredarray.length;counter++)
      {
        var list=document.createElement("tr");
        var row= "<tr id=row-"+counter+"><td><input type=checkbox name=deleteTodo id=ch-"+counter+"></input></td><td>"+filteredarray[counter].Description + "</td><td>" +filteredarray[counter].Categories + "</td><td>"+ filteredarray[counter].due_date+"</td><td>" + filteredarray[counter].Reminder+"</td></tr>";
        list.innerHTML=row;
        let tableHead=document.getElementById("table_body");
        tableHead.appendChild(list);
      }
    }

    else if(document.getElementById("categorylist").value ==="office"){
      filteredarray=userArray.filter(function(category1){
     return(category1.category=== "office");
     }
   )
//      for (var counter = 0; counter<filteredarray.length;counter++)
//      {
//        var list=document.createElement("tr");
//        var row= "<tr id=row-"+counter+"><td><input type=checkbox name=deleteTodo id=ch-"+counter+"></input></td><td>"+filteredarray[counter].Description + "</td><td>" +filteredarray[counter].Categories + "</td><td>"+ filteredarray[counter].due_date+"</td><td>" + filteredarray[counter].Reminder+"</td></tr>";
//        list.innerHTML=row;
//        let tableHead=document.getElementById("table_body");
//        tableHead.appendChild(list);
//      }
//   }
//
//   else if(document.getElementById("categorylist").value ==="home"){
//     filteredarray=userArray.filter(function(category1)
//     {
//       return(category1.category=== "home");
//     }
//   )
//     for (var counter = 0; counter<filteredarray.length;counter++)
//      {
//        var list=document.createElement("tr");
//        var row= "<tr id=row-"+counter+"><td><input type=checkbox name=deleteTodo id=-"+counter+"></input></td><td>"+filteredarray[counter].Description+ "</td><td>" +filteredarray[counter].Categories + "</td><td>"+ filteredarray[counter].due_date+"</td><td>" + filteredarray[counter].Reminder+"</td></tr>";
//        list.innerHTML=row;
//        let tableHead=document.getElementById("table_body");
//        tableHead.appendChild(list);
//      }
//   }
}

//Filter by Due Date
function searchDate(){
  if(document.getElementById(dateid).value=== "due_date"){
  var dt = new date();

  }
}
