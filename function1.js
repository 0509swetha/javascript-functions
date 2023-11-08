// function add(callback){
//     setTimeout(()=>{
//         callback("result")
//     },1000);
// }
// function addPromise(){
//     return new Promise((resolve,reject)=>{
//         add((result)=>{
//             resolve(result);
//         });
//     });
// }
// addPromise(),then((result)=>{
//     console.log(result);
// })

// const promise = new Promise(function(resolve,reject)=>{
//     setTimeout(function(){
//        resolve("swetha");
//     },1000);
// });
// convertPromiseToCallback(promise,function(error,result){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(result);
//     }
// });

function getData(){
    return new  Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("swetha");
        },1000);
    });
}
async function myFunction(){
    try{
        const result=await getData();
        console.log(result);
    }catch(error){
        console.log(error);
    }
}