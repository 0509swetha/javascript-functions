// function greet(name,callback){
//     console.log("hi"+""+name);
//     callback();
// }
// function callMe(){
//     console.log("iam a callback function");
// }
// greet("peter",callMe);

// function add(a,b,){
//     return a+b;

// }
// function divide(a,b,){
//     return a/b;
// }
// function calculate(x,y,operation){
//     return operation(x,y);
// }
// console.log(calculate(2,2,add));
// console.log(calculate(2,2,divide));

// function getData(name,processData){
//     let data={
//         name:name,
//     }
//     processData(data);
// }
// function processData(data){
//     console.log(data);
// }
// getData("swetha",processData);

// let promise= new promise(function(resolve,reject){

// })


// const count = true;
// let countValue = new Promise(function(resolve,reject){
//     if(count){
//         resolve( "there is a count value");
//     }else{
//         reject("there is no count value");
//     }
// });
// console.log(countValue);


// const count = true;

// let countValue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("There is a count value");
//     } else {
//         reject("There is no count value");
//     }
// });

// console.log(countValue);


// console.log("satrt");
// let promise1=new Promise((resolve,reject)=>{
//     console.log(1);
//     resolve(2);
// });
// promise1.then((result)=>{
//     console.log(result);
// });
// console.log("end");

// console.log("start");
// const promise1=new Promise((resolve,reject)=>{
//     console.log(1);
//     resolve(2);
//     console.log(3);

// });
// promise1.then((result)=>{
//     console.log(result);
// });
// console.log("end")


// console.log("start");
// const fn=()=>
//     new Promise((resolve,reject)=>{
//         console.log(1);
//         resolve("success");
//     });
// console.log("middle");
// fn().then((result)=>{
//     console.log(result);
// });
// console.log("end");

// function job(){
//     return new Promise(function(resolve,reject){
//         reject();
//     });
// }
// let promise=job();
// promise
// .then(function(){
//     console.log("success1");
// })
// .then(function(){
//     console.log("success2");
// })
// .then(function(){
//     console.log("success2");
// })
// .catch(function(){
//     console.log("error 1");
// })
// .then(function(){
//     console.log("success3");
// })

// function job(state){
//     return new Promise(function(resolve,reject){
//         if(state){
//             resolve("success");
//         }else{
//             reject("error");
//         }
//     });
// }
// let promise=job(true);
// promise.then(function(data){
//     console.log(data);
//     return job(false);
// })
// .catch(function(error){
//     console.log(error);
//     return "error caught";
// })
// .then(function(data){
//     console.log(data);
//     return job(true);
// })
// .catch(function(error){
//     console.log(error);
// });

// function job(state){
//     return new Promise(unction(resolve,reject){
//         if(state){
//             resolve("success");
//         }else{
//             reject("error");
//         }
//    });
// }      
// let promise=job(true);
// promise
// .then(function(data){
//     console.log(data);
//     return job(true);
// })
// .then(function(data){
//     if(data!=="victory"){
//         throw "defeat";
//     }
//     return job(true);
// })
// .then(function(data){
//     console.log(data);
// })
// .catch(function(error){
//     console.log(error);
//     return job(false);
// })
// .then(function(data){
//     console.log(data);
//     return new Error("test");
// }).then(function(data){
//     console.log("success:",data.message);
// })
// .catch(function(data){
//     console.log("Error:",data.message);
// }); 
