function numberCompare(num1, num2){
    return num1 - num2;
    }
console.log([12,21,3,23,3221].sort(numberCompare))


//ES2015 version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log(bubbleSort([1,3,7,5]))


function bubbleSort(arr){
  for (var i=0; i<=arr.length; i++){
    for(var j=0; j<arr.length; j++);{
      console.log(arr);
      if (arr[i]>arr[j+1]){
        //swap
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        }
    }
    console.log("One Pass COMPLETE")
  }
  return arr;
}
console.log(bubbleSort([1,3,7,5]))

function bubbleSort(arr){
  var noSwaps;
  for (var i=arr.length; i>0; i--){
    noSwaps = true;
    for (var j=0; j<i-1; j++){
      if(arr[j]>arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;

      }
    }
    if(noSwaps) break;
  }
  return arr;
}
bubbleSort([1,3,2,34,55])