//task1 
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

console.log(arr)

//task2 log first and last element of array
console.log(arr[0])//first
console.log(arr[8]) //last

// Activity2 array methods

// task3 use push

 arr.push(10)
console.log(arr)

// task4 use pop

arr.pop()
console.log(arr)

// task5 use shift

arr.shift(0)
console.log(arr)

// task6 use unshift

arr.unshift(1)
console.log(arr)

// activity 3

// task7 use map

const double  = arr.map((value)=>{
   return value * 2
});
console.log(double)

// task8 use filter

const  even = arr.filter((value)=>  value % 2 === 0)
console.log(arr)

//task9 use reduce

const sum = arr.reduce((acc , curr) => acc + curr , 0);

console.log(sum)

// task10 use for loop to print array

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
}

// task11 use for eacr to print array

arr.forEach(element => {
    console.log(element)
});

// task12  print 2d array

const arrayTwoD = [
    [1,2,3],
    [4,5,6],
];
console.log(arrayTwoD)

// task13 print specific element of 2d array

console.log(arrayTwoD[1] )
