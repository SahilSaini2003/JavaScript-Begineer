// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=2.0, initial-scale=1.0">
//   <title>Testing JavaScript</title>
//   <link rel="stylesheet" href="styles.css">
// </head>

// <body>
//   <div>Hellow World</div>
//   <script src="23_promises.js"></script>
// </body>

// </html>

// A normal Prosmise Use
let promise = new Promise(function (resolve, reject) {
    // resolve("Resolved");
    reject("Rejected")
}).then((val)=>{  // then catch reslove
    console.log(val);
}).catch((val)=>{   // then catch reject
    console.log(val);
})

// LoadScript Fuc with Promisies
let loadScript =((src)=>{
    return new Promise((resolve,reject)=>{
        let script = document.createElement("script")
        script.src = src
        script.onload=(()=>{
            resolve("Script "+src+" Successfully Loaded!")
            console.log("Script "+src+" Successfully Loaded!")
        })
        script.onerror=(()=>{
            reject("Script "+src+" Failed to Load")
        })
        document.body.appendChild(script)
    })
})

let pro = loadScript("18_PlayingWithClass.js")
// Promise Chaining
pro.then((val)=>{
    alert(val);
    console.log();
    let c = prompt("Do You want To load Another Script!(yes/no)","yes")
    if (c == "yes") {
        // let sc = prompt("Enter New Script")
        pro = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
    } else {
        alert("Thanks For Using Me!")
    }
}).then((val)=>{    //Promise Chaining
    alert(val);
    console.log();
    let c = prompt("Do You want To load Another Script!(yes/no)","yes")
    if (c == "yes") {
        // let sc = prompt("Enter New Script")
        pro = loadScript("ll.js")
    } else {
        alert("Thanks For Using Me!")
    }
}).catch ((val)=>{
    alert(val)
})

// Multiple Handler
pro.then ((val)=>{
    console.log(val)
})

pro.then ((val)=>{
    console.log("SuccessFully Resolved!")
})