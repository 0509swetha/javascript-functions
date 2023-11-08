function addNumbers(num1, num2, callback) {
    new Promise(function(resolve, reject) {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        reject(new Error('Both inputs must be numbers.'));
      } else {
        resolve(num1 + num2);
      }
    })
    .then(function(result) {
      callback(null, result);
    })
    .catch(function(error) {
      callback(error, null);
    });
  }
  

  addNumbers(2, 3, function(error, result) {
    if (error) {
      console.error('Error:', error.message);
    } else {
      console.log('The sum is:', result);
    }
  });