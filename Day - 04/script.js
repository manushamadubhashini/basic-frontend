import {add,subtract,user} from "./math.js" // modular import
import message from "./message.js"  // default import
// console.log("start")
// setTimeout(() => console.log("Timeout callback"),10000)
// console.log("End")

// javaScript promise


// let myPromise = new Promise((resolve, reject) => {
//     let success = true // simulate success or failure 
//     if(success){
//         setTimeout(() => resolve("operation was successfully"),1000)
//     }else{
//         reject("operation failure")
//     }
// })

// console.log("start") // main thread task 1

// // Async task 2
// myPromise.then(message =>{
//     console.log(message) // success
// }).catch(error =>{
//     console.log(error) // failure
// }).finally(() =>{
//     console.log("final") // final
// })

// // task 3

// console.log("end")

// javaScript async/await


// javaScript Modules
 console.log("10 + 20 :" , add(10,20))
 console.log("20 - 10 :" , subtract(20,10))
 console.log("User",user)
 console.log("Message",message("Manusha",21))

 // Session Storage

 const userName = sessionStorage.getItem("name");

 if (userName === null){
    console.log("Name is not set in the session storage")
 }else{
    console.log("Name is : ",userName)
 }

 sessionStorage.setItem("name","John")

// Local Storage

const userEmail = localStorage.getItem("Email")

if(userEmail === null){
    console.log("userEmail is not set in the local storage")
}else{
    console.log("Email is : ",userEmail)
}

localStorage.setItem("Email","manusha@gmail.com")

localStorage.clear()
sessionStorage.clear()