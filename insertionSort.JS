// insertionSort.JS

// declares an array 
var arr1 = [5, 4, 3, 2, 1];
function insertionSort(arr){
  // loops up the array 
  for (var i = 0; i < arr.length; i++) {

    // uses a temporary value to keep track of the current position in the array
    let val = arr[i];

    // if an unsorted element is found (i.e., the current value is larger than the value behind it), 
    // loop down the array 
    for (var j = i - 1; i > -1 && arr[j] > val; j--) {
      // push lower, sorted elements up 
      arr[j+1] = arr[j];
      
      
     
    }
    // insert the unsorted element at its appropriate location 
    arr[j+1] = val;
   }
  
  return arr;
}

insertionSort(arr1);