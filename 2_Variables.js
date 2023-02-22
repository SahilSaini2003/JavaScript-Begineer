let a = 30; // Declaring n Initlizing a Variablr
console.log(a);
a = "Sahil Saini"
console.log(a);

// There are 3 Keyword used to create Variable - let var const

// 1. var
var b = 20;
// var b = 2; // Allowded
// var b = 20 // Re-Declaration is Allowded
console.log(b);
{
    b = "Sahil";
    console.log(b);
}
console.log(b);

// 2. let
let c = 20;
// let c = 2 // Not Allowded;
// let c = 30  // Re-Declaration is not allowded
console.log(c);
{
    let c = "Sahil"; // Dont Change the value of c Outside
    // c = "Sahil"; // Change the value of c for Whole Pro
    console.log(c);
}
console.log(c);// c value remain unchanged...

// 3. const
const d = "Sahil Sir";
console.log(d);
// d = 0  // Throws Error Can't be Changed

