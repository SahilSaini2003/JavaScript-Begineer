// 1. Crate an Array of Numbers and take user Input to Add new Numbers to it?
let arr = [1,2,4,6,7]
const prompt = require("prompt-sync")({sigint : true})
console.log("1. Add Number\n2. Display\n3. Exit");
let choice 
while (choice != 3) {
    choice = prompt("Enter Your Choice: ")
    choice = Number.parseInt(choice)
    switch (choice) {
        case 1:
            let num = prompt("Enter Number: ")
            arr.push(num)
            console.log("Successfully Added");
            break;
        case 2:
            for(let b in arr){
                console.log(arr[b]);
            }
            break;
        case 3:
            console.log("Thanks For Using!");
            break;
        default:
            console.log("Enter Correct Choice");
            break;
    }
}

// 2. Question 1 + keep adding Numbers Until 0 is Added?
arr = [1,2,4,6,7]
console.log("Note Number Will Be Added Until 0 Is Entered");
let num 
while (num != 0) {
    num = prompt("Enter Your Number ")
    num = Number.parseInt(num)
    arr.push(num)
}
console.log(arr);

// 3. Filter The Number From A Array Those are Divisible By 10?
arr = [10,23,45,100,200,79,300,350]
let b = arr.filter((a)=>{
    return a%10 == 0
})
console.log(b);

// 4. Create an Array of Square Of Another Array Numbers?
arr = [2,3,4,5,6,7]
let arr2 = []
for(let a in arr){
    arr2[a] = arr[a] * arr[a]
}
console.log(arr2);

// 5. Using Reduce Calculate The Factorial Of Natural Num Present in Array?
arr = [1,2,3,4,5,6,7,8,9]
b = arr.reduce((n,n1)=>{
    return n*n1
})
console.log(b);