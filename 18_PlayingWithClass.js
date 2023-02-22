//      HTML
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
//   <script src="18_PlayingWithClass.jss"></script>
// </body>
// </html>

//      CSS
// .yellow{
//     background-color: yellow;
//     color: black;
// }

// .blue{
//     background-color: blue;
//     color: red;
// }

let a = document.body.firstElementChild

// a.className ="blue"     //Replace The whole Class
a.classList.add("yellow")   // Add Class
// a.classList.remove("yellow")    //Remove Class
// a.classList.toggle("yellow")    //Add if Dosent Exist & Remove if Exists
// a.classList.toggle("yellow")
// console.log(a.classList.contains("first"))  