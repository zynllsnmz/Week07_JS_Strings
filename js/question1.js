console.log("Question-1");
// Write a program that capitalizes the first letter of each word in a string.

// e.g.
// const str = 'strings are immutable in javascript';

// Output: Strings Are Immutable In Javascript

const givenString = "strings are immutable in javascript";

//split the above string into an array of strings
const arr = givenString.split(" ");
//console.log(arr); // ['strings', 'are', 'immutable', 'in', 'javascript']

//loop through each element of the array and capitalize the first letter.
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
//console.log(arr); //['Strings', 'Are', 'Immutable', 'In', 'Javascript']

//Join all the elements of the array back into a string.
//using a blankspace as a separator
const modifiedString = arr.join(" ");
console.log(modifiedString); // Strings Are Immutable In Javascript
