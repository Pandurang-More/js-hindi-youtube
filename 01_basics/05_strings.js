const MyName="Pandurang"
const MyRepoCount=50

console.log(`hello my name is ${MyName} and my repoCount is ${MyRepoCount}`)

console.log(MyName + MyRepoCount + " hello")
/*
output
hello my name is Pandurang and my repoCount is 50
Pandurang50 hello
*/
const gameName = new String('hitesh-hc-com')    // non premitive string bec new used here

// console.log(gameName[0]);
// console.log(gameName.__proto__);    op :{}


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);                    // hite

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
