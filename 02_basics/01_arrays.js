// array

In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

1)JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)

2) JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes,
but must be accessed using nonnegative integers (or their respective string form) as indexes.

  3) JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element 
is at the value of the array's length property minus 1.
JavaScript array-copy operations create shallow copies.
(All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).


  A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values)
  as those of the source object from which the copy was made. 

  A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) 
  as those of the source object from which the copy was made

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
 console.log(myArr[1]);

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

const MyArray=[0,1,2,3,4,"pandurang"]
console.log(MyArray[5])
 MyArray.unshift(9)             // push at start 
 console.log(MyArray)
 MyArray.shift()               // pop at start
 console.log(MyArray)

op:
pandurang
[ 9, 0, 1, 2, 3, 4, 'pandurang' ]
[ 0, 1, 2, 3, 4, 'pandurang' ]




console.log(myArr.includes(9));
 console.log(myArr.indexOf(3));

 const newArr = myArr.join()  // arr to string

 console.log(myArr);
 console.log( newArr);   // convert to string


// slice, splice



| Feature                   | `slice()`                      | `splice()`                             |
| ------------------------- | ------------------------------ | -------------------------------------- |
| Purpose                   | Extracts a portion of an array | Adds / removes elements from an array  |
| Modifies original array   | ❌ No                           | ✅ Yes                                  |
| Return value              | New array                      | Array of removed elements              |
| Parameters                | `slice(start, end)`            | `splice(start, deleteCount, items...)` |
| End index                 | **Not included**               | Not applicable                         |
| Can insert elements       | ❌ No                           | ✅ Yes                                  |
| Can delete elements       | ❌ No                           | ✅ Yes                                  |
| Can replace elements      | ❌ No                           | ✅ Yes                                  |
| Use case                  | Copying / extracting data      | Editing the array                      |
| Time complexity (general) | O(n)                           | O(n)                                   |
| Safe for immutability     | ✅ Yes                          | ❌ No                                   |

const MyArray=[0,1,2,3,4]


const n1=(MyArray.slice(0,2))

console.log("A",n1)
console.log("MyArray",MyArray)

const n2=("",MyArray.splice(0,2))
console.log("B",n2)
console.log("MyArray",MyArray)

op:
A [ 0, 1 ]
MyArray [ 0, 1, 2, 3, 4 ]
B [ 0, 1 ]
MyArray [ 2, 3, 4 ]
