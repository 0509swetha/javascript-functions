

function bubbleSort(arr, property) {​​

  var len = arr.length;

  var swapped;


  do {​​

    swapped = false;


    for (var i = 0; i < len - 1; i++) {​​

      if (arr[i][property] > arr[i + 1][property]) {​​

        var temp = arr[i];

        arr[i] = arr[i + 1];

        arr[i + 1] = temp;

        swapped = true;

      }​​

    }​​

  }​​ while (swapped);


  return arr;

}​​

var objects = [

  {​​ name: "John", age: 25 }​​,

  {​​ name: "Alice", age: 32 }​​,

  {​​ name: "Bob", age: 18 }​​

];


var sortedObjects = bubbleSort(objects, "age");

console.log(sortedObjects);