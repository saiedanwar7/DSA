// Ceiling Number In Sorted Array


let arr = [12, 25, 33, 37, 45, 58, 100, 112, 140, 200, 255];

// arr.reverse();
// console.log(arr);



function binarySearch(){

    const key = 300;

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

