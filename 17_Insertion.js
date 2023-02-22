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
//   <div>
//     <div id="self">Hello EveryOne!</div>
//   </div>
//   <script src="17_Insertion.js"></script>
// </body>
// </html>

let a = document.body.firstElementChild
console.log(a);

let b = document.createElement("div")

b.innerHTML= "Hii"
//  a.append(b)    //Insert at the End of Node
//  a.prepend(b)   //Insert at the Beginning of Node
//  a.before(b)    //Insert before Node
//  a.after(b)     //Insert after Node 
//  a.replaceWith(b)   //Replace given Node 

// a.insertAdjacentHTML("beforebegin","<b>before begin</b>")   //Insert HTML Before Element
// a.insertAdjacentHTML("beforeend","<b>before end</b>")       //Insert HTML into Element at Beginning
// a.insertAdjacentHTML("afterbegin","<b>after begin</b>")     //Insert HTML into Element at End
// a.insertAdjacentHTML("afterend","<b>after end</b>")         //Insert HTML After Element
a.insertAdjacentText("beforebegin","Hii It Worked")
// a.remove()
