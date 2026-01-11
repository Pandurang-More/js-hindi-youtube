// Dates

let MyDate=new Date()
console.log(MyDate.toString())
console.log(MyDate.toDateString())
console.log(MyDate.toLocaleString())
console.log(typeof(MyDate))
op:
Sun Jan 11 2026 12:07:35 GMT+0530 (India Standard Time)
Sun Jan 11 2026
11/1/2026, 12:07:35 pm
object


let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());   

op: 14/1/2023, 12:00:00 am



let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

op:
1768113794438        miliseconds
1768113794           seconds


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

op:
2026-01-11T06:45:22.426Z
1
0

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

