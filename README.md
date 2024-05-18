# js-for-react-native-11078728  Student ID: 11078728

# Array and User Information Manipulation
This project consists of two JavaScript files, arrayManipulation.js and userInfo.js, that perform various operations on arrays of numbers and strings.

# arrayManipulation.js
This file contains two main functions:

1.processArray(numbers)
Description: Takes an array of numbers as an argument and returns a new array where each even number is squared and each odd number is tripled.

# Parameters:
numbers (Array of numbers): The array of numbers to process.
Returns: A new array with each even number squared and each odd number tripled.

2. formatArrayStrings(strings, numbers)
Description: Takes an array of strings and an array of numbers processed by processArray. Modifies each string based on its corresponding number: capitalizes the entire string if the number is even, converts the string to lowercase if the number is odd.

# Parameters:
strings (Array of strings): The array of strings to format.
numbers (Array of numbers): The array of numbers processed by processArray.
Returns: A new array of formatted strings.

# userInfo.js
This file contains one main function:

1. createUserProfiles(originalNames, modifiedNames)
Description: Takes an array of original names and an array of modified names from formatArrayStrings. Returns an array of objects, each containing originalName, modifiedName, and id (auto-incremented starting from 1).

# Parameters:
names (Array of strings): The original array of names.
modifiedNames (Array of strings): The array of modified names from formatArrayStrings.
Returns: An array of objects with originalName, modifiedName, and id.

# Project Setup
Clone the repository to your local machine.
Navigate to the project directory.
Ensure you have Node.js installed.
Run the example usage code in a JavaScript runtime environment (e.g., Node.js) to see the functions in action.
License
This project is licensed under the MIT License.

# Authors
[Prince Arthur] - Initial work