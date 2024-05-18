// Creating a function to take array of numbers as parameter 

function processArray(numbers){

// Our processed array will be stored here
let newArray=[];

// Looping  through the array 
for(let x=0; x< numbers.length; x++){

    // if the number at the index is even, it is squared and stored in the new array
    if(numbers[x] % 2 === 0){
        newArray.push(numbers[x] ** 2)
    }

    // if it is odd , it is trippled and stored in the new array
    else (
        newArray.push(numbers[x] * 3)
    )
}
    return newArray;
}

// A function has been added to work on the processed data and take a string as an argument in addition
function formatArrayStrings(newArray,strings){
//

    if (newArray.length != strings.length ){
        throw new Error("Both argument must be of the same length");
    }
// Loop through the processed array 
for ( x=0; x<newArray.length; x++){
    let newString =[];

    //if the number is even , the entire string is capitalize
    if( newArray[x] & 2 === 0){
       newString.push(strings.toUpperCase());
    }
    else{
        newString.push(strings.tolowerCase());
    }
    return newString;
}



}