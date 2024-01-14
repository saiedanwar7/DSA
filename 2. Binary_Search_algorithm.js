

//=============== Simple Iteration=============

// console.log("1")

// for(let i = 1; i <= 1000000000; i++){
  
// }

// console.log('5');


//=============== Binary Search ==================



let arr = [12, 25, 33, 37, 45, 58, 100, 112, 140, 200, 255];

function binarySearch(){

    // 1. left = array first index 0
    // 2. right = array last index 10
    // 3. find mid index

    //compare with mid ->  key === mid
    // If mid greater then key then update right = mid - 1
    // If mid less then key then update left = mid + 1

    // calculate mid

    /* break  - When we understand that loop have to stop?
                - when left cross the right
                - when right cross the left
                - use while loop
    */

    const key = 45;

    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) /2);

    while(left <= right){

        // Check if key is match at mid
        if(arr[mid] === key){
            return 'Data found at index ' + mid;    // if match return mid
                                                    // jehetu function theke return korci peye gele return kore dibe
        }

        else if(arr[mid] > key){  // If mid greater then key then update right
             right = mid - 1;  
        }

        else{                    // If mid less then key then update left
            left = mid + 1;
            console.log(left)
        }

        // calculate mid
        
        mid = Math.floor((left + right) / 2);
        // console.log(mid);  // decimal value ashe tai Mith.floor use kora hoy
       
    }
    return 'Data not found'
}

console.log(binarySearch());



/*
            1. Iterative  Binary Search Algorithm:
Here we use a while loop to continue the process of comparing the key and splitting the search space in two halves.



    -   Program to implement iterative Binary Search
    -   A iterative binary search function. It returns
    -   location of x in given array arr[l..r] is present,
    -   otherwise -1

*/





/*================ geeksforgeeks.org ====================

arr = new Array(2, 3, 4, 10, 40);
x = 10; // key value for find from array

n = arr.length;
// result = binarySearch(arr, x);

function binarySearch1(arr, x){
    let l = 0;
    let r = arr.length -1;
    
    while ( r >= l){
        mid = l + Math.floor((r - 1) / 2);

        if(arr[mid] == x ){
            return "key found in mid ", mid;
        }
        else if (arr[mid] > x){
            r = mid - 1;
        }
        else{
            l = mid + 1;
        }

        return "key not found!", -1;
        
    }


}

result = binarySearch1(arr, x);

(result == -1) ? console.log("Element is not present in array")
           : console.log ("Element is present at index " + result);


*/