// function bubbleSort(arr){
//     var len=arr.length;
//     for(var i=0;i<len-1;i++){
//         for(var j=0;j<len-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 var temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }
//     return arr;
// }
// var array=[8,5,7,3,6,2,19,32,1,8];
// var sortedArray=bubbleSort(array);
// console.log(sortedArray);


var array=[8,5,7,3,6,2,19,32,1,8];
function bubbleSortDescending(arr){
        var len=arr.length;
        for(var i=0;i<len-1;i++){
            for(var j=0;j<len-1-i;j++){
                if(arr[j]<arr[j+1]){
                    var temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        return arr;
    }
    var sortedArray=bubbleSortDescending(array);
    console.log(sortedArray);