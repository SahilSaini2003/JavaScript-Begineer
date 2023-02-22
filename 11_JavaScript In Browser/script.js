alert("Script is Working")
let a = prompt("Enter a value","55")
a = Number.parseInt(a)
alert("DataType Of Value is "+(typeof a));
let co = confirm("Do You Want to Write it to Documents?")
if (co) {
    document.write(a)
} else {
    document.write("Please Allow Me To Write")
}
// document.body.style.background = "Green"