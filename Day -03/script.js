// JavaScript Variable Type

// var - function scope (can redeclared and updated)

console.log("1::".userEmail) // automatically hoisting 

var userEmail = "madubhashinimanusha@gmail.com" // can access any place in javascript file therefore var type has't scope...

console.log("2::",userEmail)


// let - block scope 

// console.log("1::",userAge) // Uncaught SyntaxError: Identifier 'userEmail' has already been declared 

let userAge = 21 // declared userAge variable as a let variable // Global Scope // let can be time to time update 


console.log("2::",userAge)

userAge = 22 // updated userAge


console.log("3::",userAge)

// let userAddress;
// var userLastName;

// userAddress = "Matara"
// userLastName = "Bashi"
// console.log(userAddress)
// console.log(userLastName)

// const // can't update only one time can be initialize value in variable
// console.log("1::",userAddress) // Uncaught ReferenceError: Cannot access 'userAddress' before initialization // no hoisting

const userAddress = "Matara"
console.log("2::",userAddress)

// userAddress = "Galle" //Uncaught TypeError: Assignment to constant variable. // no reassignment
// console.log("3::",userAddress)

// const userAddress; // Missing initializer in const declaration if you declare the variable of the const type you should be initialize the value in the declaration time
// userAddress = "Matara"
// console.log("2::",userAddress)

