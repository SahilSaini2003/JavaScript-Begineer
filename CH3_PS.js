// 1. Write a Program to Print Marks of a Student using for loop?
let dict ={
    Sahil : 18,
    Akshita : 23,
    Sumit : 34,
    Akash: 56,
    Yogi : 89,
    Bachan : 90
}
for (let a in dict) {
    console.log("Marks of "+a+" is "+dict[a]);
}

// 2. Write a Program to Print Try Again Until User Enter correct Num?
let a = 45
const prompt = require("prompt-sync")({sigint : true})
let choice
while(choice != a){
    choice = prompt("Enter The Value:) ")
    if (choice > a) {
        console.log("Enter Smaller Num..");
    } 
    else if (choice < a){
        console.log("Enter Bigger Num");
    }
    else{
        console.log("You Got it...");
    }
}

// 3. Write a Func to GEt Mean of 5 num?
function mean(a,b,c,d,e){
    return (a+b+c+d+e)/5
}
console.log(mean(2,3,4,5,6));