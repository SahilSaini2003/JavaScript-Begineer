async function asc() {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("p1 Completed");
        }, 2000);
    });

    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("p2 Completed");
        }, 5000);
    });

    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("p3 Completed");
        }, 8000);
    });
    console.log("Working On PROCESS 1");
    let a = await p1;
    console.log(a);
    console.log("Working On PROCESS 2");
    let b = await p2;
    console.log(b);
    console.log("Working On PROCESS 3");
    let c = await p3;
    console.log(c);
    return [a,b,c]
}

console.log("Async Func Called!!");
asc()
// let a = asc()
// console.log(a)
