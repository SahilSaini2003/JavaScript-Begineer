let a = 1000    // Global Scope // Can be accessed any Where
{
    let b = 2000    // Block Scope  // Cant be accessed outside the Block.
    console.log(a);
    console.log(b);
}
function dis(){
    let c = 3000    // Function Scope   // Can be accessed Inside the Function.
    console.log(a);
    console.log(c);
    // console.log(b);  // Throws Error
}
console.log(a);
// console.log(b);  // Throws Error
// console.log(c);  // Throws Error
dis()