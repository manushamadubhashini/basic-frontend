// javaScript Scope

var isConditional = true
// let message1 = "i'm message1"
var message2 = "i'm message2";

// Global Scope

{ 
    // Block Scope
    let a = 10
    const b = 20
    var c = 30
    console .log("1::",a,b,c)
}

// console .log("1::",a,b)
console.log("2::",c)

function myFunction() {
    let myVariable = 200
    return myVariable
    // console.log("2::",myFunction()) // after return not this line execute because Function stop to execute
    

}
console.log("2::",myFunction())


// console.log("1:",message1,message2) //message1 is not defined
console.log("1:",message2)
// conditional block scope
if(isConditional === true){
    let message1 = "i'm blocked scope message"
    var message2 = "i'm redeclared var variable"
    console.log("2:",message1,message2)
}
// console.log("3:",message1,message2)
console.log("3:",message2)
