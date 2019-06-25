//Object 
var person = {firstName:"ABC", lastName:"XYZ", age:12, id:12};
try {
    alert(`${person.name}`)
}
catch(err) {
    document.write(err.message);
}
finally{
    document.write(`Finally block`);
}
document.write(`<br>Primitive data types are number/string/boolean/null/undefined.<br>Complex  Data type includes objects`)
document.write(`<br>${person.age}`);

var a =1;
var b =1;
//comparing objects 
document.write(`<br>${Object.is(person.age, person.id)}`);

//Undefined;
var person_1= {firstName:"ABC", lastName:"XYZ", age:12, id:12};
document.write(`<br>${person_1.Name}`);

//Call by value:
let n1 =20;
let n2 =30;
document.write(`<br>Before call by  value function ${n1} and ${n2}`);
function callbyvalue(n1, n2){
    n1 = 1;
    n2 = 2;
    document.write(`<br>In call by value ${n1} & ${n2}`);
}
callbyvalue(n1, n2)
    document.write("<br>After call by Value Method"); 
    document.write(`${n1} & ${n2}`);  

//Call by referance:
function callbyReferance(n3){
    n3.a =100;
    document.write(`<br>Inside Call by Reference Method${n3.a} `);     
}
let n3 ={a:1};

document.write(`<br>Before call by  referance function ${n3.a}`);

callbyReferance(n3);
document.write(`<br>After call by referance ${n3.a}`);