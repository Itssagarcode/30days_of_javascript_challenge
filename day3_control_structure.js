// Activity 1 if else statements

// task1 write a program to check if a number is postive ,negative , or zero and log the resut to the console

const number = 23;
if (number > 0) {
  console.log(`${number} is postive number `);
}
if (number < 0) {
  console.log(`${number} is negative number`);
}
if (number == 0) {
  console.log(`${number} is Zero`);
} else {
  console.log("Not a valid number");
}

// task2 if a person is eligible to vote

const age = 23;
if (age >= 18) {
  console.log("person is eligible to vote");
} else {
  console.log("Not eligible for vote");
}

// Activity nested if else

// task3 write a program to finnd the largest of three numbers using nested if-else

const number1 = 34;
const number2 = 54;
const number3 = 45;

if (number1 > number2 && number1 > number3) {
  console.log(`largest number is ${number1}`);
} else if (number2 > number1 && number2 > number3) {
  console.log(`largest number is ${number2}`);
} else {
  console.log(`largest number is ${number3}`);
}

// Activity 3 Switch case

const day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thrusday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

    case 7:
        console.log("Sunday");
        break;
  default: console("Invalid day")
    break;
}


// task5 switch case to assign a grade a, b, c, d, f based on score


const marks = 36;

switch (true) {
    case marks < 28:
      console.log("F");
      break;
  
    case marks <= 40:
      console.log("D");
      break;
  
    case marks <= 50:
      console.log("C");
      break;
  
    case marks <= 60:
      console.log("B");
      break;
  
    case marks <= 70:
      console.log("A");
      break;
  
    default: console.log("Invalid Marks")
      break;
  }

// Activity 4 Conditonal (ternary) operator

// Task 6

const no  =  25;

const result =  no % 2 == 0 ? "number is even" : "number is Odd"

console.log(result)


// Activity 5 combining conditons

// task7 progrma to check if ayear is leap year using multiple condtions(divisible by 4, but not 100 unless also divisible by 400)

const year  = 2030;

if (year % 4 == 0 && year % 100 !==0 && year % 400 == 0) {
    console.log(`${year} is Leap year`)
} else {
    console.log(`${year} is not Leap year`)
}

