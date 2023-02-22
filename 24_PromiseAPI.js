let p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        // resolve("Val 1")
        reject(new Error("Some Thing got Wrong!"))
    },2000)
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Val 2")
    },3500)
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Val 3")
        // reject(new Error("Somthing Went Wrong!"))
    },5000)
});

// let np = Promise.all([p1,p2,p3])    //wait for all Promise to Reslove
// np.then((val)=>{                    //and return the Array of their Result
//     console.log(val);               //If Fails Produce an Error
// })

// let np1 = Promise.allSettled([p1,p2,p3])    //wait for all Promise to Settle
// np1.then((val)=>{                    //and return the Array of their Status & Values
//     console.log(val);               //If Fails dont Produce an Error
// })

// let np2 = Promise.race([p1,p2,p3])    //wait for First Promise to Reslove
// np2.then((val)=>{                    //and return Result/Error become Output
//     console.log(val);
// })

let np3 = Promise.any([p1,p2,p3])    //wait for any Promise to Reslove
np3.then((val)=>{                    //and return Result become Output
    console.log(val);                   //if all Produce Error , Ann Error is Returned
})

let np4 = Promise.resolve("Resolved")    
np4.then((val)=>{                 
    console.log(val);                   
})
let np5 = Promise.reject("Error")    
np5.catch((val)=>{                    
    console.log(val);                
})