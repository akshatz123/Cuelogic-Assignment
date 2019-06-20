//Closure in JS -Lexical scope
var counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    };
  })();
document.write(counter.value());
counter.increment();
counter.increment();
document.write(`<br>${counter.value()}`); 
counter.decrement();
document.write(`<br>${counter.value()}`);

//this
function person(fn, mn, ln) {
    this.first_name = fn;
    this.middle_name =mn
	this.last_name = ln;
    document.write(`<br>Name: ${this.first_name} ${this.middle_name} ${this.last_name}<br>`);
}
let person1 = new person("Akshat","J", "Zala");

//Events
function button() {
  var rndCol = 'rgb(' + Math.floor(Math.random(255)* 256) + ',' + Math.floor(Math.random(255)* 256) + ',' +Math.floor(Math.random(255)* 256)+ ')';
  document.body.style.backgroundColor = rndCol;
}
//module pattern
var myModule = (function() {
    'use strict';
  
    return {
      publicMethod: function() {
        document.write(`Hello World!<br>`);
      }
    };
  }());
  (myModule.publicMethod());  // outputs 'Hello World'

