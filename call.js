function addNumbers(num1, num2, callback) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      callback(new Error('Both inputs must be numbers.'));
    } else {
      callback(null, num1 + num2);
    }
  }
  
  function addNumbersAsync(num1, num2) {
    return new Promise(function(resolve, reject) {
      addNumbers(num1, num2, function(error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  addNumbersAsync(2, 3)
    .then(function(result) {
      console.log('The sum is:', result);
    })
    .catch(function(error) {
      console.error('Error:', error.message);
    });