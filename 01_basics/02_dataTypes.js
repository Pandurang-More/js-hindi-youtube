"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")
<------------------------------------------------------------------------------------------------------------------------->

let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;
// Premitive data type
// 1.number => 2 to power 53
// 2.bigint
// 3.string => ""
// 4.boolean => true/false
// 5.null => standalone value
// 6.undefined => 
// 7.symbol => unique

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false ❗ To avoid name conflicts in objects.



// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
