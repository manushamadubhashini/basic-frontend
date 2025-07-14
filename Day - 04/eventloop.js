console.log("event loop")
let  promise = new Promise((resolve, reject) => {
    let success = true
    if(success){
        setTimeout(() => resolve("promise resolved"),3000)
    }else{
        reject("promise rejected!")
    }
});

async function initiateApp(){
    try{
        const message = await promise
        console.log("message from promise: ",message)

        const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const userData = await userResponse.json()

        if(userData ?.id){
            console.log("user1 : ",userData)
            const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`)
            const postUser = await postResponse.json()
            console.log("post: ",postResponse)
        }

    }catch(error){
        console.log("Error fetching data: ",error)
    }
}
// long running task
initiateApp() // call the async functions

// show running task
console.log("I'm here after async functions")