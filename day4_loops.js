//activity 1

// task1



for (let n = 1; n <= 10; n++) {
    console.log(n)
    
}

// task 2 print the multiplication table of 5


let number  = 5;

for (let i = 1; i <= 10; i++) {

   console.log( number , "x"  ,i  ,'=' , number * i  )
    
}


//activity 2 while loop

// task 3   calculate the sum of numbers from 1 to 10 using while loop


let i = 1;
let sum ;
while (i < 10) {
     sum = i + i
    console.log( "sum = " , sum)
  i++
}


// task 4 print numbers from 10 to 1 using a while loop

 let i = 10;
 
 while (i > 0) {
    console.log(i)
    i--;
 }



 //activity 3 do while loop

//  task5


 let i = 0;
 do {
    i++
    console.log(i)
 } while (i<= 5);


//  task 6 factotial of number

function factotial(number) {
    if(number < 0){
        return "Factorial is not defined for negative numbers";
    }

    let result = 1;
    let i = number;

    do {
        result = result * i;
        i--;
    } while (i > 0);
   return result
}

let number = 5;
console.log(`Factorial of ${number} is ${factotial(number)}`)

 

// activity 4

// task 7 print patten using nested for loops;

let line = 5

for (let i = 0; i < 5; i++) {
    let pattern = '';
    for (let j = 0; j <= i; j++) {
      pattern += '*';
    }
    console.log(pattern);
  }
//   task8 print number from 1 to 10 but skip number 5 using continue statement

for (let i = 1; i <= 10; i++) {
    if(i === 5){
        continue;
    }
    console.log(i)
}

// task 9 break when number is 7

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i)
    
}


