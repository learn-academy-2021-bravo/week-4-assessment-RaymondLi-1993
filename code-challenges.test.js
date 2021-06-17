// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { unique } = require("prelude-ls")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]



describe ("shuffle", ()=> {
    test ("returns a shuffled array with the first element removed", () =>{
        expect(shuffle(colors1)).toEqual([ 'pink', 'blue', 'yellow', 'green' ])
        expect(shuffle(colors2)).toEqual([ 'saffron', 'indigo', 'ochre', 'aquamarine', 'periwinkle' ])
    })
})

// b) Create the function that makes the test pass.

// *****PSEDUO CODE*****
// to remove the first item in the array I can use the method pop();
// After I had removed the first element within the index I am going to perform a for loop to loop through the entire array
// As I am looping through the array I am going to perform the shuffle by reversing the entire array.
//I only want the loop iteration to go half the length because if I go the full length the swapping will just replace the swap characters back to their original positions.
//Each time the function is called it will remove the first element and reshuffle the array by swaping the first and last elements until the for loop is completed.
//The logic performin the swap is to hold the current iteration element, store it in a temp variable, and then perform a swap with the last element within the array
//then swap the value at the current itteration with the last element, and finally swapping the last element, with the temp variable holding the value at first index.
//I need to return the array with the items shuffled around not including the removed item.

const shuffle = (array) => {
    let removed = array.shift();
    let temp;
    let last = array.length - 1;

    for (let i = 0; i < Math.floor(array.length / 2); ++i){
              temp = array[i];
              array[i] = array[last];
              array[last] = temp; 
              console.log(array);
   }
   return array;
}




// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

describe ("shuffle", ()=> {
    test ("returns the highest and lowest value within the array", () =>{
        expect(highAndLow(nums1)).toEqual([-8, 90])
        expect(highAndLow(nums2)).toEqual([-59, 109])
    })
})





// b) Create the function that makes the test pass.

//*****PSEUDO CODE*****
//I want to loop through the entire array and as I am going I want to assess if the value is highest and the lowest;
//I need to create the two variables that will hold the largest and smallest value
//I will use a for loop that will go through the entire array
// As the foor loop is going I will be making comparisons between the highest number and the lowest number
//If I encounter a number that is higher then the current high variable I will re-assign my highest variable
//I will perform the same actions above for my lowest variable
//By the end of the for loop I should have the highest and lowest values stored in my two variables, All I need to do is return my two variables and enclose it within an arrray

const highAndLow = (array) => {
    let max = -Infinity;
    let min = Infinity;

    for (let i = 0; i < array.length; ++i){
        max = Math.max(max, array[i]);
        min = Math.min(min, array[i]);
    }
    return [min, max];
}




// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe ("uniques", ()=> {
    test ("returns the array with only uniques", () =>{
        expect(uniques(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
      
    })
})



// b) Create the function that makes the test pass.

//*****PSEUDO CODE*****
//to take in multile arrays as arguments and to dynamically join them as one argument we can use the spread syntax and the keyword arguments
//we will then store the two inputs into an array variable and call the method flat to reduce it down to one array
//to collect all the unique numbers we can call the method set which only takes in unique numbers.
// we will loop through the array using the foreach method and call the set.add method to add the numbers into the set, because set only takes in unique numbers it will remove the duplicates
//finally now that we have an object like structure containing all of our unique numbers we then call the method Array.from to revert it back into an array and return it.


const uniques = (...arg) => {
    let array = [...arg].flat();
    let set = new Set();

    array.forEach((elem)=>{
        set.add(elem);
    })
   
    
    return Array.from(set);

}
