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
//   <div id="self" onclick="alert('U Click Div')">Hello EveryOne!</div>
//   <!-- <div id="self" onmouseover="alert('U Entered Div')">Hello hgfsdbf EveryOne!</div> -->
//   <script src="20_Events.js"></script>
// </body>

// </html>

let a = document.body.firstElementChild
let b = document.body.firstElementChild.nextElementSibling

// a.onmouseenter=()=>{
//     alert("JS Running")
// }

// b.onmouseover=()=>{
//     alert("JS Override Mee")
// }

let x = function(e) {
    console.log(e.target);
    console.log(e);
    alert("Func Running")
}
a.addEventListener("click",x)
 let c = prompt("Enter Choice","3")
 if (c==3) {
    a.removeEventListener("click",x)
 }
// There Are Many Events