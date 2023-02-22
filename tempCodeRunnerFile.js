et np2 = Promise.race([p1,p2,p3])    //wait for First Promise to Reslove
// np2.then((val)=>{                    //and return Result/Error become Output
//     console.log(val);
// })