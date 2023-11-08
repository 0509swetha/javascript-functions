function myAsyncFunction() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { name: 'John', age: 30 };
        if (data) {
          resolve(data); 
        } else {
          reject('Error: Unable to fetch data'); 
        }
      }, 2000); 
    });
  }
  myAsyncFunction()
    .then(data => console.log(data))
    .catch(error => console.log(error));