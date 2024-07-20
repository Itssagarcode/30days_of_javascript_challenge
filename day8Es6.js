// Activity1  templatee literals

// task1 use template literas

const name = "Ram"
const age = 23

console.log(`My name is ${name} & i am ${age} old`)

// task 2 multiline string

const multiLineString = `This is a
multi-line string
using template literals.`;

console.log(multiLineString);

// task 3 

const arr  = [2,4,6,8,10]
let  [first, second] = arr;

console.log(`first ${first} second ${second}`)


// - Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.




let book = {
   title: "JavaScript",
   author: "Bhushan",
   year: 2021
};

let { title, author } = book;

console.log(`Title: ${title}, Author: ${author}`);

/**
 * Day 8 - ES6+ Features
 * 
 * Activity 3 - Spread and Rest Operators
 *  - Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
 */

let number = [2, 4, 6, 8 , 10];
 
let newnumber = [...number , 12, 14];

console.log(newnumber)


// *  - Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result

function sum(...arrg){
    return arrg.reduce((acc, curr) => acc + curr, 0);

}
console.log(sum(1, 2, 3, 4, 5))//15


*// - Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.



function multiply (a, b = 1) {
 return a * b;
}

console.log(multiply(5, 2)); // 10
console.log(multiply(5)); // 5



//  Activity 5 - Enhanced Object Literals
//   - Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

let names = "Bharat";
let ages = 21;

let person = {
    names,
    ages,
    greet() {
        console.log(`Hello, my name is ${this.names} and I am ${this.ages} years old.`);
    }
};

console.log(person.greet());



// task 9


let name1 = "Bhushan";
let age1 = 21;

let person2 = {
    [name1]: "Name",
    [age1]: "Age"
};

console.log(person2); // { Bharat: 'Name', '21': 'Age' }