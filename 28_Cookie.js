// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     Hellow World!
//     <script src="28_Cookie.js"></script>
// </body>
// </html>

console.log(document.cookie);   // Checking Cookie
document.cookie = "ID=101"  // Adds the Cookie
document.cookie = "Name=Sahil"
document.cookie = "LName=Saini"
console.log(document.cookie);
let c = prompt("Do you Want To Add a Cookie?","yes")
if (c == "yes") {
    let coo = prompt("Enter Now :")
    // document.cookie = coo
    document.cookie = `${encodeURIComponent(coo)}`  // decodeURIComponent used to Decode
    alert("Successfull!")
}