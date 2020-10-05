// Declare an empty array;
// Declare an array with more than 5 number of elements
// Find the length of your array
// Get the first item, the middle item and the last item of the array
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// Print the array using console.log()
// Print the number of companies in the array
// Print the first company, middle and last company
// Print out each company
// Change each company name to uppercase one by one and print them out
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// Filter out companies which have more than one 'o' without the filter method
// Sort the array using sort() method
// Reverse the array using reverse() method
// Slice out the first 3 companies from the array
// Slice out the last 3 companies from the array
// Slice out the middle IT company or companies from the array
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies


// exercise 2
import { countries } from './countries'; // 5
import { webTechs } from './web_techs';  // 5



// exercise 1
let arr = [] // 1

let arr = Array(9) // 2

arr.length // 3

arr[0] // 4 fist index of an array
arr[Math.floor(arr.lenght/2)] //4 middle index
arr[arr.lenght - 1] // 4 last index

let mixedDataTypes = [1, '2', [1,3], {foo: 'bar'}]


// Exercise 2
const removePunc = str => {
    let newStr = str.split(' ')  
    return newStr
}

