const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
op:
hitesh , welcome to website
{
  username: 'hitesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
sam , welcome to website
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}

 console.log(this);

function chai(){
    let username = "hitesh"
    console.log(this.username);
}

chai()

op:undefined

const chai = function () {
    let username = "hitesh"
    console.log(this.username);
}
chai()
op:undefined

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
chai()
op:undefined



const addTwo = (num1, num2) => {
    return num1 + num2
}

const addTwo = (num1, num2) =>  num1 + num2

const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))
op:7


