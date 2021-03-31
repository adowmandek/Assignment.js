let a = "Wajir";    // global variable
function gift(){
"use strict"
let b = "receiver";  // local variable
console.log(a);
console.log(b);
}
gift();   // Wajir/receiver


function outer(){
var a = 20;
function inner(){    // nested function
    var b =12;
    console.log(b);

}

inner();
console.log (a);

}
outer();
var x =15;
foo();   // declaration is hoisted

function foo(){
var a =4;
console.log(a);
var x;          // declaration is hoisted on the top of foo()
}
console.log(x);




