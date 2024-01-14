/* 
=======================  Order Agnostic Binary Search ======================

Order Agnostic Binary Search is an algorithm where we do not know whether the given -

   Sorted array is ascending or descending order :

    -   We declare a boolean variable to find whether the array is ascending order.
    -   In the while loop, we try to get Is middle element match to the key?
    -   if the middle element is equal to our target element, then that is the answer.
    -   If not, then we check if the array is ascending or descending order.
   
    Depending upon the condition, respective statements will be executed and we will get our answer.


 */

   



    // 1. left = array first index 0
    // 2. right = array last index 10
    // 3. find mid index

    //compare with mid ->  key === mid
    // If mid greater then key then update right = mid - 1
    // If mid less then key then update left = mid + 1

    // calculate mid

    /* break    - When we understand that loop have to stop?
                - when left cross the right
                - when right cross the left
                - use while loop
    */


let arr = [12, 25, 33, 37, 45, 58, 100, 112, 140, 200, 255];

arr.reverse();
console.log(arr);



function binarySearch(){

    const key = 140;

    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) /2);

    //Find Is Array Ascending or Decending ?

    let isAsc;
    if(arr[0] <= arr[arr.length - 1]){
        isAsc = true;
    }
    else{
        isAsc = false;
    }

    // Check if key is match at mid
    while(left <= right){
        if(arr[mid] === key){
            return 'Data found at index ' + mid; 
        }

    // Ascending Order search
    if(isAsc){
        if(arr[mid] > key){  // mid er value jodi key theke boro hoy
            // update right
            right = mid - 1;   
        }
        else {
           // update left    //mid er value jodi key theke choto hoy
           left = mid + 1;

           console.log(left)
       }
    }


    // Decending Order Search
    else{
        if(arr[mid] < key){
            right = mid - 1
        }
        else{
            left = mid + 1;
        }
    }
    
    // calculate mid
        mid = Math.floor((left + right) / 2);
    // console.log(mid);  // decimal value ashe tai Mith.floor use kora hoy
       
    }
    return 'Data not found'
}

console.log(binarySearch());




//  from Greek


        // // JavaScript Program to implement
        // // the above approach 
 
        // // An iterative binary search function.
        // function binarySearch(arr, start, end, x) {
 
        //     // Checking the sorted order of the given array
        //     let isAsc = arr[start] < arr[end];
        //     while (start <= end) {
        //         let middle = start + Math.floor((end - start) / 2);
 
        //         // Check if x is present at mid
        //         if (arr[middle] == x)
        //             return middle;
 
        //         // Ascending order
        //         if (isAsc == true) {
 
        //             // If x greater, ignore left half
        //             if (arr[middle] < x)
        //                 start = middle + 1;
 
        //             // If x smaller, ignore right half
        //             else
        //                 end = middle - 1;
        //         }
 
        //         // Descending order
        //         else {
 
        //             // If x smaller, ignore left half
        //             if (arr[middle] > x)
        //                 start = middle + 1;
 
        //             // If x greater, ignore right half
        //             else
        //                 end = middle - 1;
        //         }
        //     }
 
        //     // Element is not present
        //     return -1;
        // }
 
        // // Driver Code
        // let arr = [40, 10, 5, 2, 1];
        // let x = 10;
        // let n = arr.length;
        // document.write(binarySearch(arr, 0, n - 1, x));