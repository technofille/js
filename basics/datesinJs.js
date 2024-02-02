// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.getDate());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2024,2,2,5,3)
// console.log(myCreatedDate.toLocaleString());
 let myCreatedDate = new Date("2024-02-02")
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth()); 
newDate.toLocaleString('default',{
    weekday: "long"
})

console.log(newDate); 