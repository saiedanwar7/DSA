/*===============  Ceiling Number In Sorted Array  ====================

    -> At first find the sorted Array mid. 
    -> After find mid we compare mid with key if mid grether then key then shift mid on the left and create new array. 
                right = mid - 1
    -> The again and again find mid and compare with key never find key then we set our finding Ceiling is - mid + 1;
   

    key = 50;  finding Ceiling = 

    step - 1:
    ---------

    arr = [12, 25, 33, 37, 45, 58, 100, 112, 140, 200, 255];  
    -> mid = 58  -> key < 58 -> mid shift left that means (right = mid - 1);

    step - 2:
    ---------
    arr = [12, 25, 33, 37, 45];   
    -> mid = 33; key > mid; mid shift right that means (left = mid + 1)

    step - 3:
    ---------
    arr = [37, 45];   
    -> mid = 37; key > mid; mid shift right that means (left = mid + 1)

    step - 4:
    --------
    arr = [45]  
    - compare with key if find key grether then this value then comfram Ceiling is grether then this value
    -> mid = mid + 1  - comfram Ceiling



*/

let arr = [12, 25, 33, 37, 45, 58, 100, 112, 140, 200, 255];

// arr.reverse();
// console.log(arr);



function binarySearch(){

    const key = 50;

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
            // return 'Data found at index ' + mid; 
            return arr[mid];   // jodi key peye jai tahole mid return korbe
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
    // return 'Data not found'
    // return arr[mid + 1];   // Ceiling - jodi data na pai tahole key theke boro value ta return korbe 
    if(arr[mid + 1]){
        return arr[mid+1];
    }
    else{
        return "Array Index Out of Bound";
    }
}

console.log(binarySearch());

