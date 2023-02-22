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
//   Hello EveryOne!
//   <span id="self">Myself Sahil...</span>
//   <div>Bye See You.</div>
//   <div id="hi" hidden>Remember Me</div>
//   <script src="15_MoreDOM.js"></script>
// </body>
// </html>

console.log(document.body.firstElementChild)
console.dir(document.body.firstElementChild) 

console.log(document.body.firstElementChild.tagName)
console.log(document.body.firstElementChild.nodeName)

console.log(document.body.firstChild.tagName)
console.log(document.body.firstChild.nodeName)

console.log(document.getElementById("self").innerHTML)
document.getElementById("self").innerHTML="Sahil"

console.log(document.getElementById("self").outerHTML)
document.getElementById("self").outerHTML="<span id = \"self\"><b>Sahil</b></spam>"
console.log(document.getElementById("self").outerHTML)

console.log(document.body.textContent);

document.getElementById("hi").hidden = false;
document.getElementById("self").hidden = true;