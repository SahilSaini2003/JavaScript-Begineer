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
//   <div class = "DOM" id="1" name ="div"></div>
//   <p class = "HI"></p>
//   <h1 class = "DOM" id ="2"></h1>
//   <h2 class = "HI"></h2>
//   <div class = "HI" id="3" name ="div"></div>
//   <script src="14_SearchingTheDOM.js"></script>
// </body>
// </html>

console.log(document.getElementsByName("div"));     //Returns Elements By Name
console.log(document.getElementById("2"));      // Returns Elements By Id
console.log(document.getElementsByClassName("DOM"));    // Returns Elements By Class Name
console.log(document.getElementsByTagName("div"));  // Returns Elements By Tag Name
console.log(document.querySelector(".HI"));     // Returns First Elements By CSS Selector
console.log(document.querySelector("div.HI"));  
console.log(document.querySelectorAll(".HI"));  // Returns All Elements By CSS Selector
console.log(document.body.firstElementChild.matches(".DOM"));   // Check if Element Matches CSS
console.log(document.body.firstElementChild.closest(".DOM"));  
let b = document.body.firstElementChild.firstElementChild   
console.log(document.body.firstElementChild.contains(b));   // Returns trur if Element Matches 