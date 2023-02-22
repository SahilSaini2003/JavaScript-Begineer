// ?? OUTPUT
console.log("Hellow World!");
console.log("My first Java Script Code is This........");

// ?? INPUT
const prompt = require("prompt-sync")({sigint : true})
let n = prompt("Enter The Value ")
n = Number.parseInt(n);
console.log(typeof n);