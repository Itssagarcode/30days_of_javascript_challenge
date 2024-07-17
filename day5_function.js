// Activity1 function decelaration

function sum(number){
    if (number % 2 == 0) {
        console.log("Number is even")
    } else {
        console.log("Number is odd")
    }
}
console.log(sum(4));

// task2 sruare of the number

function square(number){
return number * number

}
console.log(square(5))

// activity 2 function Expression

// task3

function max(num1 , num2,) {
    if (num1 > num2) {
        console.log(`${num1} is maximum`)
    } else {
        console.log(`${num2} is maximum`)
    }
}
max(2,4)

// task4 conacatenate teo string and return the result.
let str1 = "Hey! this is " 
let str2 =  "Your boy Bhushan"
function concat(){
    return str1 + str2
}
console.log(concat())

// activity3

// task5

const fun =  (num1, num2)=>{
     return num1 *  num2
}
console.log(fun(4,5))


// task6
 
const checkStr = ()=>{
    if (str1.includes("Bhushan")) {
        console.log(true)
    }else{
        console.log(false)
    }
}
checkStr()


// activity 4 function parameters and default values

// task7 default parameters

function product(number1 , number2 = 5){
    return number1 / number2
}
console.log(product(10))


// task8  greeting message with name and age  and default parameter

function greeting(name  , age = 21) {
    return `My name is ${name} and i am ${age} year old`
}
console.log(greeting("bhushan"))

// activity5 higher order function

// task9 

function repeatFunction(fn, times) {
    return function() {
      for (let i = 0; i < times; i++) {
        fn();
      }
    };
  }
  
  // Example usage:
  function sayHello() {
    console.log("Hello!");
  }
  
  const repeatSayHello = repeatFunction(sayHello, 5);
  repeatSayHello(); // This will call sayHello 5 times
  

// task10

function applyFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
  }
  
  // Example usage:
  function addTwo(x) {
    return x + 2;
  }
  
  function multiplyByThree(x) {
    return x * 3;
  }
  
  const value = 5;
  const result = applyFunctions(addTwo, multiplyByThree, value);
  console.log(result); // This will log 21 (because (5 + 2) * 3 = 21)
  


