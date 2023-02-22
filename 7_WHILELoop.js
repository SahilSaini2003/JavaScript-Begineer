const prompt = require("prompt-sync")({sigint : true})
let n = prompt("Enter The Value:> ")
let i=0
while(i < n){
    console.log(i+1);
    i++;
}
i=0
do{
    console.log(i);
}while(i<n);