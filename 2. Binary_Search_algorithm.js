

//=============== Simple Iteration=============

// console.log("1")

// for(let i = 1; i <= 1000000000; i++){
  
// }

// console.log('5');


//===================  Binary Search ======================



let arr = [12, 25, 33, 37, 45, 58, 100, 112, 140, 200, 255];

function binarySearch(){

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




