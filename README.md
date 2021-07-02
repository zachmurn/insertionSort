# insertionSort.js 
Implementation of the InsertionSort Algorithm in JavaScript 

## Description
insertionSort is used to sort unsorted arrays. Due to its nested-for loop structure, insertionSort is not the most efficient algorithm, having a worst-case time-complexity of <i>O(n<sup>2</sup>)</i> in terms of swaps & comparisons. It is considered among the "simple quadratic" sorting algorithms. 

The algorithm is as follows. 
1. Loops up the array 
2. Uses a temporary value to keep track of the current position in the array
3. If an unsorted element is found (i.e., the current value is smaller than the value behind it), then it loops down the array; and pushes lower, sorted elements up.
4. Finally, it inserts the unsorted element at its appropriate location 


## A visual depiction of the algo courtesy of WikiPedia 

<img src="Insertion-sort-example-300px.gif">
