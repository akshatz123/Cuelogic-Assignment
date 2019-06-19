try {
    alert("Welcome guest!");
}
catch(err) {
    document.write( err.message);
}
finally{
    document.write(`Finally block`);
}
document.write(`<br>Primitive data types are number/string/boolean/null/undefined.<br>Complex  Data type includes objects`)
//Object 
var person = {firstName:"ABC", lastName:"XYZ", age:12, id:12};
document.write(`<br>${person.age}`);

var a =1;
var b =1;
//comparing objects 
document.write(`<br>${Object.is(person.age, person.id)}`);

//Undefined;
var person_1= {firstName:"ABC", lastName:"XYZ", age:12, id:12};
document.write(`<br>${person_1.Name}`);
