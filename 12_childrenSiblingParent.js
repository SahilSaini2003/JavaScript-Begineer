// <!DOCTYPE html>
// <html lang="en">
// <head> <!-- Iam Child of html tag -->
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=2.0, initial-scale=1.0">
//     <title>Testing JavaScript</title> <!-- Iam Child of head tag -->
// </head>
// <body> <!-- Iam Child of html tag -->
//     <div>
//         <p>This Is Me</p> <!-- Iam Child of div & decndent node of body and html-->
//         <span>I am Sibling Of p</span> <!-- Iam Child of div -->
//         <div>Hey Im div</div>
//     </div>
//     <script src="12_childrenSiblingParent.js"></script>
// </body>
// </html>

// Child
console.log(document.body.firstChild)  //Returns First Child Element
console.log(document.body.lastChild)    //Returns last Child Element
console.log(document.body.childNodes)   //Returns All Child Nodes
console.log(document.body.childNodes[3])
console.log(document.body.hasChildNodes())  //Check Weather there are any Child Node
// Siblings
console.log(document.body.previousSibling) //Returns Previous Sibling
console.log(document.head.nextSibling)  // Return Next Sibling
// Parent Node
console.log(document.documentElement) //HTML
console.log(document.documentElement.parentNode)    //#document
console.log(document.body.parentNode)   //HTML
console.log(document.documentElement.childNodes)
// Elements
console.log(document.body.firstElementChild)    //Returns First Element Child
console.log(document.body.lastElementChild)     //Returns Last Element Child
console.log(document.body.nextElementSibling)   //Returns Next Element Child
console.log(document.body.previousElementSibling)   //Returns Previous Element Child