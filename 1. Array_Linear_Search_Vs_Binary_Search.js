//=============== Array Linar Search and Binary Search  =======

// https://www.scaler.com/topics/binary-search-in-javascript/
// https://www.tutorialspoint.com/data_structures_algorithms/linear_search_algorithm.htm

// loop cholche array length porjonto tai Big-O(n) hobe


//------------ Array Travers ------------------------



let abc1 = [25, 'Mount Stack', true, false, [], {}, function() {console.log('Hello World');}]

for(let i = 0; i <abc1.length; i++){
    // console.log(abc1[i]);  // print value
    console.log(`I am ${typeof abc1[i]} at index ${i}` )
}



//------ Array khuje ber korbo-----

// specific value er index ber kora 


let abc2 = [25, 'Mount Stack', true, false, [], 27, {}, function() {console.log('Hello World');}];

let key2 = 27;

for(let i = 0; i<abc2.length; i++){
    if(abc2[i]  === key2){
        console.log("Key found at index: ", i)  // key found at index: 5
    }
}





/*
1. --------------- Linear Search Algorithm ---------------

-------- Jodi khuje na pai tahole o message show korbe ---------

// spy name e ekta variable nibo jeta value na pele not found show korbe
// data peye gele break kore dibo

*/



let abc = [25, 'Mount Stack', true, false, [], 27, 30, 33, 34, 50];

function LinarSearch(){

let key = 34;
let spy = false;  // first e dore rakhbe pai nai jokhon pabe tokhon true return korbe

for(let i = 0; i < abc.length; i++){
    if(abc[i]  === key){
        console.log("Key found at index: ", i) // result
        spy = true;    // jodi data peye jai tahole true return korbe
        break;        // value jodi peye jai tahole break korbe
    }

}


if(!spy){  // false
    console.log('Not Found!');
}

}

LinarSearch();