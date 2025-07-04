// javaScript Scope

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
