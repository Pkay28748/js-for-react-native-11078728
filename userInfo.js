// Creating a new function

function createUserProfiles(names,modifiedName){
     if (names.length != modifiedName.length){
        throw new Error("The arrays must have the same length");
     }

// Creating a variable to store the final processed array of object
     let stringObject=[];

     for (let a =0; a<names.length; x++){

        // Creating an object notation for our user profiles
        let userObject= {
            id : a+1,
            OriginalName:names[a],
            modifiedName : modifiedName[a]
        }
            stringObject.push(userObject);
    }
    return stringObject;
}

