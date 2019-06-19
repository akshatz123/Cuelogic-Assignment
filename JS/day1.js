
var x; 
x = 5;    
let y = 6;    
document.write(`<br>The addition of ${x} and ${y} is ${x+y} .`);
document.write("<br>The multiplication of "+ x+ " and "+y +" is "+y*x+".");
document.write("<br>The division of "+ x+ " and "+y +" is "+y/x+".");
document.write(`<br>The subtraction of ${x} and ${y} is ${y-x} .`);
let s1 = "abc";
let s2 = "xyz";
document.write(`<br>The concat method used to join 2 strings :${s1.concat(s2)}`);
document.write();
let array1= [1, 2, 3, 4];
document.writeln(`<br> array1 consist of elements ${array1} is of length ${array1.length}`);
document.writeln(`<br>Original array1: ${array1}`);
document.writeln(`<br>array1 method Pop is used :${array1.pop()}`);
document.writeln(`<br> After using array1.pop(): ${array1}`);
document.writeln(`<br>array1 method push is used : ${array1.push(5)}`);
document.writeln(`<br> After using array1.push(): ${array1}`);
let array2= [6, 7, 8, 9];
document.writeln(`<br> ${array1.concat(array2)}`);
if (s2 !==null) {
    document.writeln(`<br>s2  is not null`);
  } else {
    ('String in s2 is null');
  }
for (var i = 0;i < 5;i++){
        i+=1;
        document.write(`<br />${i}<br>`);

    }
function getRoot2() {
  return Math.SQRT2;
} 
document.write(`${getRoot2()}`);   