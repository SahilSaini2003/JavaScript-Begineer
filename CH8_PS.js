// Q1 Write a Program to Show Diffent Alert When Diffrent Button are Clicked?
// Way 2
let a = document.getElementById("Button1")
a.onclick=()=>{
    alert("You Clicked Button 1")
}

let b = document.getElementById("Button2")
b.onclick=()=>{
    alert("You Clicked Button 2")
}

let c = document.getElementById("Button3")
c.onclick=()=>{
    alert("You Clicked Button 3")
}

// Q3 Use Event Listner to Do Q2?
let d = document.getElementById("b1").addEventListener('click',function() {
    window.location="https://www.google.com"
})
let e = document.getElementById("b2").addEventListener('click',function() {
    window.location="https://www.fb.com"
})
let f = document.getElementById("b3").addEventListener('click',function() {
    window.location="https://www.twitter.com"
})

