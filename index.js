console.log("Hello World!");
//Arithmetic operators
//let x = 20;
//let y = 10;
//Z = x +y;
//Z = x * y;
//Z = x / y;
//Z = x % y;
//x++;
//y--;
//Z = x ** y;
//console.log(Z);

//Assignment opertors
//let a = 20;
//a += 2;
//a -= 2;
//a *= 2;
//a ** 2;
//a /= 3;
//a %= 2;
//console.log(a);
//comparison operator
//console.log(10 == 200); //check value are equal or not
//console.log(10 === "10"); // check value and datatype
//console.log(10 != 10); //not equal
//console.log("10" !== 10); //
//console.log(10 < 20);
//console.log(10 > 20);
//console.log(10 >= 20);
//console.log(10 <= 20);
//Logical operators
//AND(&&)
//let age = 20;
//let boolen = false;
//console.log(age && boolen);
//OR(||)
//let area = true;
//let bool = false;
//console.log(area || bool);
//Not(!)
//let age = true;
//console.log(!age);
//
//let age = 20;
//if (age < 18) {
//console.log("eligible to vote");
// else {console.log("not eligible to vote");}

/*
let age = 16;
if (age < 18) {
  console.log("eligible to vote");
}

let Day = 2;
switch (Day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wesnesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("Sundaya");
    break;
  default:
    console.log("non day");
}
*/
//const compare = (a, b) => {
//return b - a;
//};
//let num = [1, 2, 6, 4, 5, 9, 8, 7, 20, 3, 54, 33];
//num.sort(compare);
//console.log(num);

/*let num = [1, 2, 6, 4, 5, 9, 8, 7, 20, 3, 54, 33];
let num1 = num.splice[(23, 56, 4, 512, 34, 78, 65)];
console.log(num);
console.log(num1);
*/
//let num = [1, 2, 6, 4, 5, 9, 8, 7, 20, 3, 54, 33];
//let num1=[]

/*let cities = ["Mumbai", "Pune", "Nashik", "Nagpur"];

for (let city of cities) {
  console.log(city);
}

let prices = [100, 200, 50, 150];

let total = 0;

for (let price of prices) {
  total = total + price;
}

console.log(total);

let numbers = [20, 75, 40, 90, 30, 60];
let count = 0;
for (let num of numbers) {
  if (num > 50) {
    count++;
  }
}
console.log(count);
*/
/*
let prices = [120, 450, 80, 250, 600, 150];
Finds the total price.
Finds how many products cost more than ₹200.
Finds the highest price.
Finds the lowest price.
Prints all four results.
*/

/*let numbers = [45, 12, 89, 34, 67, 100, 23];

let highest = numbers[0];

for (let num of numbers) {
    if (num > highest) {
        highest = num;
    }
}

console.log(highest);       
*/

//let prices = [120, 450, 80, 250, 600, 150, 700, 9];
//Finds the total price.
//Finds how many products cost more than ₹200.
//Finds the highest price.
//Finds the lowest price.
//Prints all four results.

/*let total = 0;
for (i = 0; i < prices.length; i++) {
  total = total + prices[i];
}
console.log(total);
*/
/*let count = 0;
for (i = 0; i < prices.length; i++) {
  if (prices[i] > 200) {
    count++;
  }
}
console.log(count);
*/
/*
let highest = prices[0];
for (let i = 0; i < prices.length; i++) {
  if (prices[i] > highest) {
    highest = prices[i];
  }
}
console.log(highest);
*/
/*
let prices = [120, 450, 80, 250, 600, 150, 700, 9];
let lowerst = prices[0];
for (let i = 0; i < prices.length; i++) {
  if (lowerst > prices[i]) {
    lowerst = prices[i];
  }
}
console.log(lowerst);
*/

/*
let prices = [120, 450, 80, 250, 600, 150];
Finds the total price.
Finds how many products cost more than ₹200.
Finds the highest price.
Finds the lowest price.
Prints all four results.
*/

//let prices = [120, 450, 80, 250, 600, 150];
/*let total=0;
for (let price of prices){
    total=total+price;
}
console.log(total);
*/

/*for (price of prices){
    if(price >200){
        console.log(price);
    }
}
*/
/*
let highest=prices[0];
for (let i=0;i<prices.length;i++){
    if(highest<prices[i]){
        highest=prices[i];
    }
}
console.log(highest);
*/
/*
let lowest=prices[0];
for(let i=0;i<prices.length;i++){
    if(lowest>prices[i]){
        lowest=prices[i];
    }
}
console.log(lowest);
*/

//Map()

/*
let numbers1 = [5, 10, 15, 20];
//Use map() to multiply every number by 3.
let a=numbers1.map((value)=>{
return value*3;
});
console.log(a);

let prices1 = [100, 200, 300, 400];
//Use map() to add ₹50 to every price
let a1=prices1.map((value)=>{
  return value+50;
});
console.log(a1);

let numbers = [2, 4, 6, 8];
//Use map() to create a new array containing the square of every number.
let a2 =numbers.map((value)=>{
    return value*value;
});
console.log(a2 );

let prices2 = [100, 250, 80, 450];
//Create a new array where every price has 10% added.
let a3=prices2.map((value)=>{
return value *1.10;
});
console.log(a3);
*/
/*
let num=[3,6,8,3,2];
let a=num.map(value=>value*2);
console.log(a);
*/

//filter()

/*
let numbers = [10, 25, 30, 45, 50, 65];
//Use filter() to get numbers greater than 40.

let a=numbers.filter((value)=>{
 return value>40;
});
console.log(a);
*/
/*
let prices2 = [100, 250, 80, 450, 120, 600];
//Get prices greater than ₹200.
let a =prices2.filter(value=>value>200);
console.log(a);
*/
/*
let numbers = [10, 15, 20, 25, 30, 35, 40];
//Get only even numbers.
let a =numbers.filter(value=>value%2===0);
console.log(a)
*/
/*
let students = [
    { name: "Rahul", marks: 75 },
    { name: "Amit", marks: 45 },
    { name: "Priya", marks: 88 },
    { name: "Neha", marks: 32 },
    { name: "Kiran", marks: 65 }
];
//For now, use filter() to select students whose marks are greater than or equal to 50.
let a=students.filter(students=>students.marks>=50);
console.log(a);
*/

//find

/*
let numbers1= [10, 25, 40, 55, 70];
//Find the first number greater than 30
let a1=numbers1.find(value=>value>30);
console.log(  a1)

let prices = [100, 250, 80, 450, 120, 600];
//Find the first price greater than 300.
let a=prices.find(value=>value>300);
console.log(a)

//Find the first even number:
let numbers = [15, 21, 33, 42, 50, 61];
let a2=numbers.find(value=>value %2==0);
console.log(a2);

//Find the first product whose price is greater than 100.
let products = [
    { name: "Rice", price: 100 },
    { name: "Milk", price: 50 },
    { name: "Oil", price: 180 },
    { name: "Sugar", price: 60 }
];
let a3=products.find(value=>value.price>100);
console.log(a3);
*/

//some
/*
let numbers = [10, 20, 3, 40];

let result = numbers.every(num => num > 5);

console.log(result);
*/
/*
forEach() → perform an action
map()     → transform every value
filter()  → select matching values
find()    → find first matching value
some()    → at least one matches?
every()   → all match?
reduce()  → combine values into one result
*/


//reduce()
/*
//Calculate the total:
let numbers = [10, 20, 30, 40, 50];
let a = numbers.reduce((sum,num)=>{
  return num+sum;
});
console.log(a)

//Calculate the total price:
let prices = [100, 250, 80, 450, 120];
let a2=prices.reduce((a ,b)=>{
  return a+b;
});
console.log(a2)

//Find the product of all numbers:
let numbers1 = [2, 3, 4, 5];
let a4=numbers1.reduce((n,s)=>{
  return n*s;
});
console.log(a4)

//Calculate the total marks:
//average of total numbers
let marks = [75, 82, 68, 91, 56];
let a5=marks.reduce((m,e)=>{
  return m+e
  
})
let avg=a5/marks.length;
console.log(a5)
console.log(avg)

*/

//
//object
//
/*
let student = {
    name: "Dnyaneshwar",
    age: 21,
    branch: "Computer Engineering"
};
console.log(student.name)
console.log(student.age)
console.log(student.branch)
console.log("my name "+student.name+"and i am"+student.age+"old")

let student1 = {
    name: "Rahul",
    age: 20,
    marks: 75
};
//Q1. Change age from 20 to 21.
//Q2. Change marks from 75 to 85.
//Q3. Add a new property:city: "Nashik"
//Q4. Print the complete student object.
//Q5. Print:
//Rahul lives in Nashik

console.log(student1.age=21);
console.log(student1.marks=85);
console.log(student1.city="nashik");
console.log(student1.name);
console.log(student1.name+" lives in "+student1.city);

let student2 = {
    name: "Amit",
    age: 22,
    marks: 78,
    city: "Pune"
};

//Q1. Delete city.
//Q2. Change marks to 90.
//Q3. Add branch: "Computer".
//Q4. Print the complete object.
//Q5. Delete age and print the object again.
delete student2.city;
student2.marks=90;
student2.branch="computer";
console.log(student2.name,student2.city);
delete student2.age;

//IN operator

let student3 = {
    name: "Rahul",
    age: 21,
    marks: 85
};
//Check whether name exists.
console.log("name" in student3);
//Check whether city exists.
console.log("city" in student3);

//Add:
//student.city = "Nashik";
console.log(student3.city="Nashik");
console.log("city" in student3);
//Delete age:
delete student3.age;
console.log("age " in student3);

let product = {
    name: "Laptop",
    price: 50000,
    brand: "HP"
};

console.log(product);
*/

//object method
//1. simple method 

//2. method with a parameter
//3.method using object data -This

//Q1 — Easy
//Create this object:
/*
let person = {
    name: "Dnyaneshwar",

    sayHello: function() {
        console.log("Hello!");
    }
};
//Call the sayHello() method.
person.sayHello();

//Q2
//Create:
let person1 = {
    name: "Dnyaneshwar",

    introduce: function() {
        console.log("My name is " + this.name);
    }
};
//Call introduce().

person1.introduce();
 
//q3
//Create:
let product = {
    name: "Laptop",
    price: 50000,

    showDetails: function() {
      // print product name and price
       console.log("The name of product is " + this.name);
       console.log("The price of product "+ this.price)
    }
};
product.showDetails();
//Q4

//Create a student object:
let student = {
    name: "Rahul",
    marks: 85,

    result: function() {
        // print:
        // Rahul scored 85 marks

        console.log(`${student.name} scored ${student.marks} marks`);
    }
};
student.result();
//Use template literals (ES6+):
//`${...}`
*/

/*
//Q1 — Easy
let person = {
    name: "Dnyaneshwar",
    age: 21,

    introduce: function() {
        // Print:
        // My name is Dnyaneshwar
        // I am 21 years old
        console.log("my name is "+ this.name);
        console.log("I am "+ this.age+ "old");
    }
};
person.introduce();
//Use this.name and this.age.

//Q2
let mobile = {
    brand: "Realme",
    price: 15000,

    details: function() {
        // Print brand and price using this
        console.log("Brand:"+this.brand);
        console.log("Price:"+this.price);
    }
};
mobile.details();
//Expected:

//Q3
//Create:
let rectangle = {
    length: 10,
    width: 5,

    area: function() {
        // calculate length × width using this
        console.log(this.length*this.width);
    }
};
rectangle.area();

//Q4  Challenge
let student = {
    name: "Rahul",
    marks: 75,

    result: function() {
        if (this.marks>50) 
          {
            console.log("rahul is Pass ");
        } else {
            console.log(" Rahul is Fail ");
        }
    }
};
student.result();

*/
/*
//Nested Object
//Create:
let student = {
    name: "Dnyaneshwar",
    age: 21,

    address: {
        city: "Nashik",
        state: "Maharashtra"
    }
};
//Print:
//Student name
//Student age
//City
//State

console.log(student.name);
console.log(student.age);
console.log(student.address.city);
console.log(student.address.state);


//Q2
console.log(student.city="Mumbai");
console.log(student.address.pindcode=422001);
console.log(student.address.pincode);

//q3
//Create this object:
let student1 = {
    name: "Rahul",

    education: {
        degree: "Computer Engineering",
        college: {
            name: "ABC College",
            city: "Nashik"
        }
    }
};

//student1.education.collage();
/*
Rahul
Computer Engineering
ABC College
Nashik


console.log(student1.name);
console.log(student1.education.degree);
console.log(student1.education.college.name);
console.log(student1.education.college.city);
*/

//Array of Object
//Q1 — Easy
/*
let students = [
    { name: "Rahul", marks: 75 },
    { name: "Priya", marks: 88 },
    { name: "Amit", marks: 65 }
];
//Print Priya's marks.
console.log(students[1].marks);
//Print Amit's name.
console.log(students[2].name);
//Q3
//Use for...of to print all student names.
for(let student of students){
  console.log(student.name);
}
//Q4
//Use for...of to print:
for(let student of students){
  console.log( `${student.name} scored ${student.marks} marks`);
 ;
}

let result=students.filter((student=>student.marks > 70));
console.log(result);

let result1 = students.find(student => {
    return student.name === "Priya";
});

console.log(result1);

let result2=students.map((student)=>{
  return student.name;
});
console.log(result2);

let result3=students.filter(student=>student.marks < 70);
console.log(result3);

let result2=students.find((student)=>{
  return student.name;
});
console.log(result2);
*/

//object Destructuring ⭐ ES6+
/*
let student = {
    name: "Rahul",
    age: 21,
    marks: 85
};
let { name, age, marks } = student;

console.log(name);
console.log(age);
console.log(marks);

//Q1
let person = {
    name1: "Dnyaneshwar",
    age1: 21,
    city: "Nashik"
};
//Use destructuring to create:
let{name1,age1,city}=person;
console.log(name1);
console.log(age1);
console.log(city);

//Q2
let product = {
    name2: "Laptop",
    price: 50000,
    brand: "HP"
};
//Use destructuring to get name and price.
let {name2,price,brand}=product;
console.log(name2);
console.log(price);


//Q3 ⭐
let student1 = {
    name3: "Priya",
    marks2: 88,
    branch2: "Computer"
};
//Destructure all three properties and print:
let {name3,marks2,branch2}=student1;

console.log(`${name3} scored ${marks2} in computer`);
*/
/*
let students = [
    { name: "Rahul", marks: 75 },
    { name: "Priya", marks: 88 },
    { name: "Amit", marks: 65 }
];
//Your task:
//1. Use find() to find Priya.
//2. Store the result in a variable.
//3. Destructure name and marks.
//4. Print:

let result=students.find(student=>student.name==="Priya");
  console.log(result);
  
  let {name,marks}=result;
      console.log(name);
      console.log(marks);

*/

//Array Destructuring ⭐ ES6+

//Q1 — Easy
/*let numbers = [100, 200, 300];

let [first,second,thrid]=numbers;
console.log(first);
console.log(second);
console.log(thrid);

//Q2
let colors = ["Red", "Blue", "Green", "Yellow"];
//Destructure only the first two values:

let [color1,color2, , ,]=colors;
console.log(color1);
console.log(color2);

//Q3 ⭐
let numbers2 = [10, 20, 30];
//Use destructuring to get 10 and 30, while skipping 20.
let [a,,c]=numbers2;
console.log(a);
console.log(c)

//Q4 🔥 Challenge
let fruits = ["Apple", "Banana", "Mango", "Orange"];
let [Ffruit,sFruit,,,]=fruits;
console.log(Ffruit)
console.log(sFruit)

//Q5 🚀 Combine with find()
//Remember your previous example:
let students = [
    { name: "Rahul", marks: 75 },
    { name: "Priya", marks: 88 },
    { name: "Amit", marks: 65 }
];
//Use find() to get Priya.
let r1=students.find(student=>student.name==="Priya");
console.log(r1);
*/

//Spread Operator ... ⭐ ES6+

// Q1 — Easy
// let numbers = [10, 20, 30];
// let num1=[...numbers,40,50];
// console.log(num1);

// //Q2
// let fruits1 = ["Apple", "Mango"];
// let fruits2 = ["Banana", "Orange"];
// //Combine both arrays using spread.
// let fruit=[...fruits1, ...fruits2];
// console.log(fruit);

// //Q3
// let oldNumbers = [5, 10, 15];
// //Create a copy using spread and add 20 and 25.
// let old=[...oldNumbers,20,25];
// console.log(old);

// //Q4 ⭐ Object
// let employee = {
//     name: "Meera",
//     department: "IT"
// };
// let employee1={...employee,
//     salary:45000,
// }
// //Create a new object using spread and add:
// console.log(employee1);

// //Q5 🔥 Challenge
// let personal = {
//     name: "Kabir",
//     age: 22
// };

// let education = {
//     degree: "Computer Engineering",
//     college: "XYZ College"
// };
// //Use the spread operator to create one object containing all four properties.

// let personal1={...personal,...education};
// console.log(personal1);

//Rest Operator ... ⭐ ES6+

//Q1 — Easy
// //Create:
// function showNumbers(...numbers) {
//     console.log(numbers);
    
// }
// showNumbers(10,20,30,40);

// //Q2
// //Create a function:
// function add(...numbers) {
//     let num=numbers.reduce((sum ,num)=>{
//           return sum +num;
//     });
// }
// add(5,10,15,20);

// //Q3 ⭐
// //Create:
// function employee(name, ...skills) {
//     // print name
//     // print skills
//     console.log(name);
//     console.log(skills);
// }
// employee("meera","javascript","react","node.js");

// //Q4 🔥 Array Destructuring + Rest
// let numbers = [10, 20, 30, 40, 50];

// let [first,second,...remaining]=numbers;
// console.log(first);
// console.log(second);
// console.log(remaining);

// //Q5 🚀 Challenge
// //Create:
//  function multiply(...numbers1) {
//      let n2=numbers1.reduce((num1,n2)=>{
//          return num1*n2;
    
//      });
//      return n2;
//  }
//   console.log(multiply(2,3,4));

//Default parameter

//Q1 — Easy Create:
// function greet(name="Guest") {
//     console.log(`hello ${name}`);
// }
// greet();
// greet("Isha");

// //Q2
// //Create:
// function student(name = "Unknown", marks = 0) {
//     // print name and marks
//     console.log(`${name} ${marks}`);
// }
// student();
// student("Arjun",85);

// //Q3 ⭐
// //Create:
// function calculate(price, discount = 10) {
//     // subtract discount from price
//     console.log(price - discount);
    
    
// }
// calculate(100);
// calculate(100,20);

// //Q4 🔥
// Create:
// function introduce(name = "Guest", city = "Mumbai") {
//     // print:
//     // My name is ___ and I live in ___
//     console.log(`My name ${name} and I live in ${city} `);
// }
// introduce();
// introduce("Kavya","Pune");

// //Q5 🚀 Challenge
// //Combine default parameters + rest operator:
//  function add(start = 0, ...numbers) {
//      // add start + all numbers
//     let num1=numbers.reduce((sum,num)=>{
//        return num+sum;
//     },start);
//      console.log(num1);
//  }
// add();
//  add(10,20,30);
// add(5,10,15,20);

// Q1
// Create a function calculate() that accepts:
// two numbers
// a callback function
// Use the callback to multiply the two numbers.
// function calculate(a,b) {
//     return a*b;
// }
// function multiply(callback) {
//     console.log(callback(100,2));
    
// }
// multiply(calculate);

// //Q2
// //Create a function:
// function greetUser(name, callback){
//  console.log("Welcome "+name);

// }
// function greet(callback){
//   callback ("pravin");
// }

// greet(greetUser);

//Q3 ⭐
//Create a function:
// function operate(a, b, callback){
//     console.log(callback(a,b));
    
// }
// function addition(a,b) {
//     return a+b;
     
// }
// function subtaction(a,b,callback) {
//     return a-b;
// }
// function multi(a,b,callback) {
//     return a*b;
// }
// operate(10,5,addition);
// operate(12,3,subtaction);
// operate(3,4,multi);

//Higher-Order Functions

//Q1
//Create a function:
// function perform(a, b, operation) {
//     console.log(operation(a,b));
// }
// function add(a,b){
//     return a+b;
// }
// function subtract(a,b){
//     return a-b;
// }
// function multiply(a,b){
//     return a*b;
// }
// perform(10,2,add);
// perform(10,5,subtract);
// perform(10,5,multiply);

// //Create a function that returns another function.
// //For example, the returned function should multiply a number by 5:

// function parameter(a,b){
//     return function(number){
//         return number *5;
//     }
// }
// let greet=parameter();

// console.log(greet(10));

//closure

//Create a function:
function createCounter() {
    let count = 0;

    // return a function
    return function(){
        count++;
        return count;
    }
}
let counter = createCounter();

console.log(counter());
console.log(counter());

console.log(counter());

//Q1 — Easy
//Create a closure that starts with score = 0.
//Every time you call the returned function, increase the score by 10.

function creatascore() {
    let score=0;
     return function(){
       score +=10;
         return score;
     }
}

let score=creatascore();
console.log(score());
console.log(score());
console.log(score());

//Q2 ⭐
//Create:
function createCounter(start1) {
    // create a variable using start
    // return a function that increases it by 1
     let count1=start1;
    return function(){
        count++;
        return count;
    }
}
let counter1 =creatascore(5);
console.log(counter1());
console.log(counter1());
console.log(counter1());

//Q3 🔥 Challenge
//Create a closure for a bank balance:
function createBalance(amount) {
    // return a function
  let balance=amount;
    return function(){
     balance++;
       return balance;

    }
}
let balance=createBalance(1000);
console.log(balance());
console.log(balance(500));
console.log(balance(-200));

