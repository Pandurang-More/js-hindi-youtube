console.log(2 > 1);      //true
console.log(2 >= 1);     //true
 
console.log(2 < 1);         //false


console.log("2" > 1);        // true
console.log("02" > 1);      // true
<------------------------------------------------------------------------------------------------------->

//null → converted to 0 in relational comparison (>=, <=)

//== does NOT convert null to number

console.log(null > 0);      //false
console.log(null == 0);     // false      
console.log(null >= 0);     // true        
<------------------------------------------------------------------------------------------------------->

//undefined becomes NaN → all comparisons are false

console.log(undefined == 0);  
console.log(undefined > 0);     
console.log(undefined < 0);

<------------------------------------------------------------------------------------------------------->
console.log("2" === 2);    // false     // it first check the datatype then compare, strict checking


== → compares value only (type conversion happens)

=== → compares value + type (no conversion)

!= → value comparison

!== → value + type comparison


null == undefined   // true
null === undefined  // false
<------------------------------------------------------------------------------------------------------->
typeof null       // "object"  ❗ (JS bug)
typeof undefined  // "undefined"


null + 1        // 1
undefined + 1   // NaN
undefined and null both are falsy value.
