// function sum(a,b){
//     console.log(a+b);
// }
// function operation(val1,val2,callback){
//     callback(val1,val2);
// }
// operation(6,5,sum);
// console.log("start");
// setTimeout(()=>{
//     console.log("we are at setTimeout");
// },4000);
// console.log("end");

// console.log("start");
// function loginUserServer(email,callback){
//     setTimeout(()=>{
//         console.log("we have data");
//         callback({userEmail:email});
//     },5000);
// }
// const user=loginUserServer("badaswetha9@gamil.com",(user)=>{
//     console.log(user);
// })
// console.log("end");

// console.log("start");
// function loginUserServer(email){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("we have data");
//             resolve({userEmail:email});
//         });
//     });
// }
// loginUserServer("badaswetha9@gmail.com")
// .then((email)=>{
//     console.log(email);
// })

// console.log("start");
// function loginUserServer(email,callback){
//     setTimeout(()=>{
//         console.log("we have data");
//         callback({userEmail:email});
//     });
// }
// const user=loginUserServer("badaswetha9@gmail.com",(user)=>{
//     console.log(user);
// });
// console.log("End");


// console.log("start");
// function loginUserServer(email){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log("we have data");
//                 resolve({userEmail:email});
//             });
//         });
//     }
// async function getUser(){
//     try{
//         const user=await loginUserServer("badaswetha9@gmail.com");
//         console.log(user);
//     }catch(error){
//         console.log(error);
//     }
        
//     }

//     getUser()
