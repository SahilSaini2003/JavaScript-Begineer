// nn bb ss u  -- Primitive DataTypes
let a = null; // Null DataType
let b = 345; // Number DataType
let c = true; // Boolean DataType
let d = BigInt(4567); // BigInt DataType
let e = "Sahil"; // String DataType
let f = Symbol("HIII"); // Symbol DataType
// let g = undefined; // Undefined DataType
let g;  // Undefined DataType
console.log(a,b,c,d,e,f,g);
console.log(typeof g); // Use To get Data Type 

// Non- Primitive Data Types
// Objects (Seems Similer To Dictionary in Python and Structures In C & C++)
const item ={
    "Name" : "Sahil",
    "Couse" : "B.tech",
    "Percentage" : 90
}
console.log(item);
console.log(item["Name"]);
