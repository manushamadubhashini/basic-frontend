
// console.log("event loop");
// let promise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     setTimeout(() => resolve("promise resolved"), 3000);
//   } else {
//     reject("promise rejected!");
//   }
// });

// async function initiateApp() {
//   try {
//     const message = await promise;
//     console.log("message from promise: ", message);

//     const userResponse = await fetch(
//       "https://jsonplaceholder.typicode.com/users/1"
//     );
//     const userData = await userResponse.json();

//     if (userData?.id) {
//       console.log("user1 : ", userData);
//       const postResponse = await fetch(
//         `https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`
//       );
//       const postUser = await postResponse.json();
//       console.log("post: ", postUser);
//     }
//   } catch (error) {
//     console.log("Error fetching data: ", error);
//   }
// }
// // long running task
// initiateApp(); // call the async functions

// // show running task
// console.log("I'm here after async functions");

async function fetchUserData(postDataCallback) {
  const userResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  const userData = await userResponse.json();

  if (userData?.id) {
    console.log("user1 : ", userData);
    const postData = await postDataCallback(userData.id)
    console.log("post: ", postData);
    return {user : userData, posts : postData}
  }
}
async function fetchPostData(userId) {
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const postData = await postResponse.json();
  return postData;
}

const output = fetchUserData(fetchPostData);
output.then(result =>{
    if(result){
        console.log("fetch data successfully ",result);
    }else{
        console.log("no data fetch");
    }
}).catch(error=> {
    console.log("Error fetching data",error)
});
