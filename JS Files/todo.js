var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
/* list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
 */
// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    }
    else
    {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
}
function onSubmit(){
  sessionStorage.clear();
  alert("Your session Expired. Pls relogin to complete the transaction.");
}
function profile(){
  if(sessionStorage.clear()==false){
    window.location.href='profile.html';
  }
}
//local storage

var userDetails=new Array();
var obj = {
    "FirstName" :   fname,
    "Address":  address,
    "Password":    pass.value,
    "Gender":   gender,
    "Username":    uname,
    "LastName" :   lname,
    "ToDO": []
    };
// console.log(localStorage.getItem("userDetails"));
var todoObj={
  Description:description,
  
  // userDetails.push(obj);
  //       var string = JSON.stringify(userDetails);
  //       localStorage.setItem("userDetails", string);
  //       return true;
  //   }
}
else {
    userDetails.push(obj);
    var string = JSON.stringify(userDetails);
    localStorage.setItem("userDetails", string);
    return true;
}
