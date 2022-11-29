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

//logical operater are &&(and) , ||(or) , !(not)

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
let grade = 100 ;
switch(true) {
    case grade == 100 : console.log("your awesome")
    break;
    case (grade >= 90) && (grade <= 99): 
        console.log("well done")
    break;
    case (grade >= 75) && (grade <= 89): 
        console.log("distinction")
    break;
    case (grade >= 50) && (grade <=74): 
        console.log("Passed")
    break;
    case (grade <= 49) && (Math.sign(grade) !=-1 ) : 
        console.log("Failed")
    break;
    default:
        console.log("fake!")
}