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
//   <div class="date">Date:-</div>
//   <script src="21_Date.js"></script>
// </body>

// </html>

let a = document.body.firstElementChild

let date = new Date()
let b = date.getDate()
document.write(b+"/")
b = date.getMonth()
document.write(b+"/")
b = date.getFullYear()
document.write(b+" | ")
b = date.getHours()
document.write(b+":")
b = date.getMinutes()
document.write(b+":")
b = date.getSeconds()
document.write(b)

console.log(date);