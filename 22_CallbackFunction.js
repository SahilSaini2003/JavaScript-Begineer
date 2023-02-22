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

function loadScript(src, callback) {
    let script = document.createElement("script")
    script.src = src
    script.onload=()=>{
        callback(null,src)
    }
    script.onerror=()=>{
        callback(new Error("Failed"))
    }
    document.body.appendChild(script)
}

function success(error,src) {
    if (error) {
        alert(error)
        return
    }
    alert("Successfully Loaded SRC = "+ src)
}

let c = prompt("Do you Want to Load a Script?","yes")
if (c=="yes") {
    loadScript("18_PlayingWithClass.js",success)
    loadScript("ll.js",success) // Error One
}