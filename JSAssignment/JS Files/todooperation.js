var todoList;
function edit(){
    document.getElementById("")
    user_name = sessionStorage.getItem("user"); //fetch data from session storage
    for(var i = 0; i < ToDo_array.length; i++)
    {
      if(user_name == ToDo_array[i].Username)   // username found then break
      {
        userIndex=i;    
        todoList = ToDo_array[i].ToDO;
            break;
      }
    }
    for(var index=0; index<=ToDo_array.length;index++){
        
    }
    
}