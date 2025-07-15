// callback function
function fetchData(callback){
    console.log("fetching data...")
    setTimeout(() => {
        const userData = {id : 1, name : "Manusha"}
        console.log("data fetch",userData)
        callback(userData)
    },3000)

}
function handleData(data){
    console.log("handle data",data)
}

fetchData(handleData)