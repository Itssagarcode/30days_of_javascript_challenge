


// task1 object with properties title, aurhor  and year

const book = {
    title: "THe Comeback" ,
    author: " bhushan",
    year: 2024,

    
}
console.log(book)

// task2 acces and log the  title and author properties of book object

console.log(book.author , book.title)


// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book title and author, and log the result of calling this method.


const book2 = {
    title: "THe Comeback" ,
    author: " bhushan",
    year: 2024,
    result: function () {
        console.log(book2.author, book2.title)
    }
    
}
book2.result();



// Task 4: Add a method to the book object that takes a parameter(year) and updates the book year properties then log the updated object. 

const book3 = {
    title: "THe Comeback" ,
    author: " bhushan",
    year: 2024,
    result: function (year) {
        console.log(year)
    }
    
}
book2.result(2023);


// Activity3 nested objects


// Task 5: Create a nested object representing a library with properties like name and books(an array of book objects), and log the library object to the console.

const library = {
    name: "coding books",
    books: [
        {title : "javascrip", author : "bhushan", year: 2022},
        {title: "java" , author: "bhushan" , year: 2024},
        {title: " react" , author: "bhushan", year: 2023}
    ]
}
console.log(library);


// Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log(library.name)

library.books.forEach(books => {
    console.log(`book title is ${books.title}`)
});




// Activity 4: The this keyword
// Task 7: Add a method to the book object that uses the this keyword to return string with the book title and year, and log the result of calling this method.

const book4 = {
    title: "THe Comeback" ,
    author: " bhushan",
    year: 2024,
    result: function () {
      return   `the title is ${this.title} the author is ${this.author}`
    }
    
}
console.log(book4.result())


// Task 9: Use object.keys and object.values methods to log all the keys and values of the book object.

const key  = Object.keys(book);
console.log(key)

const values = Object.values(book);
console.log(values)