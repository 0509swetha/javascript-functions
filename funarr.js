// Arrow functions are been introduced in 
// the ES6 version of JavaScript. It is used to 
// shorten the code. Here we do not use the 
// “function” keyword and use the arrow symbol.
// const add=(a,b)=>a+b;
// console.log(add(4,5));
//  let promises=new promise();
//  console.log(promises(new promise()));

function oneNumber(a){
    return new Promise((resolve,reject)=>{
        if(a){
            resolve(a);
        }else{
            reject(a);
        }
    });
}
 oneNumber(5)
    .then ((a)=>{
        return (a);
    })
    .catch((error)=>{
        console.log(error);
    });
