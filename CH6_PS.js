// 1. Write a Programe using Prompt Function to take Input of age as a Value & use alert to tell he can drive or not?
// let age = prompt("Enter Your Age:")
// age = Number.parseInt(age)
// if (age<18) {
//     alert("Your Cant Drive!!!!")
// } 
// else {alert("You Can Drive")}

// 2. In Q1 use confim and ask if He want to see Prompt Again?
// let choice = true
// while (choice == true) {
//     let age = prompt("Enter Your Age:")
//     age = Number.parseInt(age)
//     if (age<18) {
//         document.write("<br>Age :",age,"<br>Your Cant Drive!!!!")
//         alert("Your Can't Drive!!!!")
//     } 
//     else {
//         document.write("<br>Age :",age,"<br>Your Can Drive!!!!")
//         alert("You Can Drive!!!")
//     }
//     choice = confirm("Do You Want To Se Prompt Again")
// }

// 3. In Q2 Use console error if age Enterred is Negative?
// let choice = true
// while (choice == true) {
//     let age = prompt("Enter Your Age:")
//     age = Number.parseInt(age)
//     if (age<0) {
//         console.error("Entered Age Is Negative!!!")
//     }
//     else if (0<age<18) {
//         document.write("<br>Age :",age,"<br>Your Cant Drive!!!!")
//         alert("Your Can't Drive!!!!")
//     } 
//     else {
//         document.write("<br>Age :",age,"<br>Your Can Drive!!!!")
//         alert("You Can Drive!!!")
//     }
//     choice = confirm("Do You Want To Se Prompt Again")
// }

// 4. WAP tp change url to google.com if number greater Tahn 4 Is Entered?
// let num = prompt("Enter Your Number:")
// num = Number.parseInt(num)
// if (num > 4 ) {
//     location.href = "https://www.google.co.in/"
// }

// 5. Change Background Color as per Entered Value?
let col = prompt("Enter Your Colour Name:","Yellow")
document.body.style.background = col
document.title="Title Is Changed"