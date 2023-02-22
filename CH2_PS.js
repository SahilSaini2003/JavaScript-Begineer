// 1. Use Logical Operators to find Weather The age of a Person is b/w 10 And 20?
let age = 20;
if (age > 10 && age < 20) {
    console.log("Your Age Is Between 10 & 20");
} else { console.log("Your Age Is Not Between 10 & 20"); }

// 2. Switch Case Statement
let Grade = 'D';
switch (Grade) {
    case 'A':
        console.log("Excellent...");        
        break;
    case 'B':
        console.log("Good...");
        break;
    case 'c':
        console.log("Fail...");
        break;
    default:
        console.log("Fail++...");
        break;
}

// 3. W.A.P to Check No. Is Divisible By 2 & 3?
let num = 11;
if (num%2==0 && num%3==0) {
    console.log("Num Is Divisible By 2 & 3...");
}
else if (num%2==0){
    console.log("Num is Divisible By 2 but Not By 3...");
}
else if (num%3==0){
    console.log("Num is Divisible By 3 but Not By 2...");
}
else {console.log("Num is Not Divisible By 2 & 3...");}

// 4. Driving check
if (age < 15) {
    console.log("Not Valid For Driving !");

} 
else if(age >= 15 & age <18){
    console.log("Can Apply For Learner Licence...");
}
else{
    console.log("You Can Drive!\nBut Make Sure To Wear Helmet...");
    
}