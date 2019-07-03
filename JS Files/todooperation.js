var ToDo_array = JSON.parse(localStorage.getItem("userDetails"));
var input = document.createElement("input");
input.setAttribute("type", "checkbox");
input.setAttribute("class", "selectedcheckbox");
var check = document.getElementsByClassName("checkbox");
function edit(){
  sessionStorage = sessionStorage.user;
  var check_boxes = document.getElementsByClassName("selectedcheckbox");
  for(var index = 0; index < ToDo_array.length; index++)
  {
    if(user_name == ToDo_array[index].Username)   // username found then break
    {
      todoList = ToDo_array[index].ToDO;
      console.log(ToDo_array[index].ToDO);
      break;
    }
  }

  for(count = 0; count <= ToDo_array[index].ToDO.length; count++){
      console.log(check[index].checked);
    if (check[count].checked === true){
      sessionStorage.setItem("user",count);
      var getCount = count;
      document.getElementById("description").value = ToDo_array[index].ToDO[count].description;
      document.getElementById("category").value = ToDo_array[index].ToDO[count].category;
      document.getElementById("due_date").value = ToDo_array[index].ToDO[count].duedate;
      document.getElementById("reminder").value = ToDo_array[index].ToDO[count].reminder;
      }
     
    }
}
function save(){
  var description2= document.getElementById("description").value;
    var category2 = document.getElementById("category").value;
    var duedate2 = document.getElementById("duedate").value;
    var reminder = document.getElementById("Reminder").value;
    ToDo_array2 = localStorage.getItem('userDetails');
    let indexloc= sessionStorage.user;
    
    var parsedUser = JSON.parse(ToDo_array2);

    for(var i=0;i<parsedUser.length;i++){
    parsedUser[index].todoList[indexloc].description = description2;
    parsedUser[index].todoList[indexloc].category = category2;
    parsedUser[index].todoList[indexloc].duedate = duedate2;
    parsedUser[index].todoList[indexloc].reminder = reminder;
    
    parsedUser = JSON.stringify(parsedUser);
    localStorage.setItem('userDetails',parsedUser);
    window.location.reload();


}
}