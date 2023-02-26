let a = (() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve(101)
        }, 2000 )
    });
})

// To Call this Promise Multiple Time We use Async and Await 
// To use Async and Await we Create a func
// let b = (async () => {
//     let a1 = await a()
//     console.log(a1);
//     let a2 = await a()
//     console.log(a2);
//     let a3 = await a()
//     console.log(a3);
// })
// b() // Extra Variable is Created!!

//To avoid this IIFE - Immedietly Invoked Function Expressions is Used...
(async () => {
    let a1 = await a()
    console.log(a1)
    let a2 = await a()
    console.log(a2)
    let a3 = await a()
    console.log(a3)
})();    //Throwing Error in VS Code Terminal But Running In Browser Console...