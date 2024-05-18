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

console.log(processArray([1,2,3,4,5,6]));