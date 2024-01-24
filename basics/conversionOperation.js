let score = false

//console.log(typeof score);

//console.log(typeof (score));

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//33=>33, "33abc" = NAN(not a number), true =>1; false =>0

let isLoggedIn = "test"
let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

// 1=> true; 0=> false
// ""=> false
// "test" = true,

let sNumber = 33
let stringNumber = String(sNumber);
//console.log(typeof (stringNumber));

// operations
let value = 3
let negValue = -value
//console.log(negValue)
//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);
//console.log(2/4);
//console.log(2%3);


let str1 = "test"
let str2 = " now !"
let str3 = str1 + str2
console.log(str3);


//toPrimitive in ecma
console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");