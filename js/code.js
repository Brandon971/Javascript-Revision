//===Math===
// console.log("sqrt():",Math.sqrt(4));
// 2 * 2 * 2 * 2 * 2
// console.log("pow(2,5)")

//Return a middle element(s)
// let data = [1,2,3,4,,5,6,20]
// let size = data.length -1
// console.log("Array size: ", size);
// console.log("Element",data[size]);
// console.log("at():", data.at(-1));
// let middleIndex = Math.trunc((data.length -1)/2);
// console.log("middleIndex:",middleIndex);
// console.log("middle element:", data.slice(middleIndex, middleIndex + 2));

//show highest element and remove the string
// data.splice(3, 1);
// let onlyNumbers = data.filter( item => {
    // if (typeof item != 'string')
        // return item;
// })
// console.log("Max:" ,Math.max(...data));

//Show middle number
// let middleIndex = Math.trunc((data.length - 1)) /2;
// if (middleIndex %2 === 0) {
    //     console,log(data.slice(middleIndex, middleIndex +2));
    // }else{
        //     console.log(data[middleIndex]);
        // }
// console.log(middleIndex %2 === 0 ? data.slice(middleIndex, middleIndex +2) : data[middleIndex] );

// ===string methods ==
// let sentence ="i love programming";
// console.log(sentence.toLowerCase())
// console.log(sentence.split('p'));

//Date 
// let myDate = new Date();
// console.log("My date:", myDate);
// let myDate = new Date("2022/09/1");
// console.log("My date :", myDate.toLocaleDateString());

//if statements
// let age = prompt("please enter your age")
// if (age > 17) {
//     console.log("you are reg");
// }else {
//     console.log("you are ugly");
// }

//Nested if statement
// let age = prompt("Enter your age");
// let salary = prompt("Enter your salary");
// if(age > 17) {
//     if(salary >= 5000) {
//         console.log("You a baller");
//     }
// }else {
//     console.log("You a joe");
// }
//Alternate method for nested if staement
// let age = prompt("Enter your age");
// let salary = prompt("Enter your salary");
// if(age > 17 && salary >= 5000) {
//     console.log("YOU A BALLER !");
// }else {
//     console.log("YOU A JOE ");
// }

//logical operater are &&(and) , ||(or) , !(not);

//Switch statement
// let monthInt = 1;
// switch(monthInt) {
//     case 1 :
//         console.log("january");
//     break;
//     case 2:
//         console.log("february");
//     break;
// }
// let grade = 100 ;
// switch(true) {
//     case grade == 100 : console.log("your awesome")
//     break;
//     case (grade >= 90) && (grade <= 99 ): 
//         console.log("well done")
//     break;
//     case (grade >= 75) && (grade <= 89): 
//         console.log("distinction")
//     break;
//     case (grade >= 50) && (grade <=74): 
//         console.log("Passed")
//     break;
//     case (grade <= 49) && (Math.sign(grade) !=-1 ) : 
//         console.log("Failed")
//     break;
//     default:
//         console.log("fake!")
// }

//loops
/*for in (will give the index)
for of
for(; ;)
while
do while
.forEach()
*/
// let numbers =[9, 7, 8, 9, 4]
// let lovechild ={
//     name:'Timothy',
//     surname: 'Mgoqi',
//     email: 'timothy@gmail.com'
// }
//object for in
// for (let love in lovechild){
//     console.log(`${love} => ${lovechild[love]}`)
// }
// for(let numb in numbers ) {
//     console.log(numb);
// }
// console.table(numbers);

//for (; ;)
// for(let i=0 ;;) {
//     console.log("let found out")
// }

//while loop 
// let cnt = 0;
// while(cnt < numbers.length) {
//     console.log(`Step:${number[cnt]}`);
////     cnt++;
// }

//do .. while
// do{
//     console.log(`Step: ${numbers[cnt]}`);
//     cnt++;
// }while(cnt < numbers.length);

//function 
// let numb1 = prompt("enter nommer");
// let numb2 = prompt("enter nommer jy")
// function addition (numb1 , numb2) {
//     console.log("Sum is: ",numb1 + numb2);
// }
// addition(4, 5);
// addition(5, 7);
// addition(9, 23);

//sum with an arrow function
// let addition = (numb1, numb2) => {
//     console.log(numb1 + numb2);
// }
// addition(5, 7)
//return a sum with a function
// function subtraction(number1 , number2) {
// return number1 - number2 

// };
// console.log(subtraction(10, 5));

//shortcut but only calls it once
// ((numb1, numb2)=>{
//     console.log(numb1+numb2);
// })(8, 2);
// Ternary operater
// let age = prompt("enter age");
// console.log( age >= 18 ? "Big balls" : "Still a baby");

//rest operator
// function sumOf(...args) {
//     return args.reduce( (a, b)=>{
//         return a + b
//     });
// }
// console.log(sumOf(1,2,3,4,5));

//Constructor function 
// (can only place a negative number on a "at" method)
// function Person(...details) {
//     this.firstName = details[0];
//     this.lastName = details[1];
//     this.email = details.at(-1);
// }
// let person1 = new Person("Franky","Deluxe","peter@gmail.com")
// console.log(person1)
// function PersonDetails(firstName, lastName, 
//     email) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;

//     this.getFirstName = ()=> {
//         return this.firstName
//     }
//     this.setFirstName = (value) =>{
//         this.firstName = value;
//     }
//     this.getLastName = ()=> {
//         return this.lastName
//     }
//     this.setLastName = (value) =>{
//         this.lastName = value;
//     }
//     this.getEmail = ()=> {
//         return this.lastName
//     }
//     this.setEmail = (value) =>{
//         this.email = value;
//     }    
    
//     this.display = ()=> {
//         return `
//         Name: ${this.getFirstName()}
//         Surname: ${this.getLastName()}
//         Email: ${this.getEmail()}`;
//     }
// } 
// let person1 = new PersonDetails("Peter", "Henk",
// "peter@gmail.com");
// console.log(person1.display());
// console.log("=============");
// person1.setFirstName("Sarah");
// person1.setLastName("James");
// person1.setEmail("sarah@gmail.com");
// console.log(person1.display());

//Solution 2 using a class
// class PersonDetails{
//     // Private
//     #firstName;
//     #lastName;
//     #email;
//     constructor(firstName, lastName, email) {
//         this.#firstName = firstName;
//         this.#lastName = lastName;
//         this.#email = email;
//     }
//     // FirstName
//     get firstName() {
//         return this.#firstName;
//     }
//     set firstName(value) {
//         this.#firstName = value;
//     }
//     // LastName
//     get lastName() {
//         return this.#lastName;
//     }
//     set lastName(value) {
//         this.#lastName = value;
//     }
//     // Email
//     get email() {
//         return this.#email;
//     }
//     set email(value) {
//         this.#email = value;
//     }
//     // Display
//     display() {
//         console.log(`
//         Name: ${this.firstName}
//         Surname: ${this.lastName}
//         Email: ${this.email}`);
//     }
// }
// let person1 = new PersonDetails("Joel", "Mukanya", "joel@gmail.com");
// person1.display();
// console.log("===========");
// person1.firstName = "Peter";
// person1.lastName = "Henk";
// person1.email = "peter@gmail.com"
// person1.display();

//ONCLICK
// function addition(e) {
//     e.preventDefault();
//     let numb1 = document.querySelector("#numb1").value;
//     let numb2 = document.querySelector("#numb2").value;
//     let output = document.querySelector('#output').innerText = eval(`${numb1} + ${numb2}`)
// }

//addEvenListener
let btnAddition = document.querySelector('button');
btnAddition.addEventListener('click',() =>{
    let numb1 = document.querySelector("numb1").value;
    let numb2 = document.querySelector("numb2").value;
    let output = document.querySelector("#output").innerText = parseInt(numb1)+ parseInt(numb2)
}) 
