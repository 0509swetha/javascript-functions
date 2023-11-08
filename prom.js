function addNumbers(num1, num2) {
    return new Promise(function(resolve, reject) {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        reject(new Error('Both inputs must be numbers.'));
      } else {
        resolve(num1 + num2);
      }
    });
  }
  
  addNumbers(2, 3)
    .then(function(result) {
      console.log('The sum is:', result);
    })
    .catch(function(error) {
      console.error('Error:', error.message);
    });