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
//   <!-- Custom Attributes data-*  -->
//   <span id="self" class="test" data-sahil="Saini" data-Roll="3">Myself Sahil...</span>
//   <div>Bye See You.</div>
//   <div id="hi" hidden>Remember Me</div>
//   <script src="16_PlayingWithAttributes.js"></script>
// </body>
// </html>

// console.log(document.body.firstElementChild)
// console.dir(document.body.firstElementChild) 

// console.log(document.body.firstElementChild.tagName)
// console.log(document.body.firstElementChild.nodeName)

// console.log(document.body.firstChild.tagName)
// console.log(document.body.firstChild.nodeName)

let a = document.getElementById("self")

console.log(a.innerHTML)
a.innerHTML="Sahil"
console.log(a.innerHTML)

console.log(a.outerHTML)
a.outerHTML="<span id = \"hell\"><b>Sahil Saini</b></spam>"
console.log(document.getElementById("hell").outerHTML)

console.log(document.body.textContent);

let b = document.getElementById("hell")

document.getElementById("hi").hidden = false;
b.hidden = true;

console.log(a.hasAttribute("class"))
console.log(a.getAttribute("class"))
console.log(a.attributes)
console.log(a.setAttribute("class","change"))
console.log(a.removeAttribute("class"))

// Accessing Custom Attributes!
console.log(a.dataset);
console.log(a.dataset.sahil);
console.log(a.dataset.roll);