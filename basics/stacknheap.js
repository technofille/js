//stack memory example
let mainName ="test";
 let updatedName = mainName;
 updatedName = "test updated";
 //console.log(mainName);
 //console.log(updatedName);

//heap memory example
let userOne = {
    email: "krupali@google.com",
    upi: "krupali@ybl"
}
let userTwo = userOne
userTwo.email = "krupaligohel@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);