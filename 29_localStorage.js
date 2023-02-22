// let c = prompt("Do You Want to Store Data?","yes")
// let key = "Name"
// if (c == "yes") {
//     key = prompt("Enter Key You Want To set :-")
//     let value = prompt("Enter Key You Want To set :-")
//     localStorage.setItem(key, value)    // Store Key Value Pair
// }

// console.log(`The Value at ${key} is ${localStorage.getItem(key)}`)  // Get The Value At Key

// if (key == "red" || key == "green") {
//     localStorage.removeItem(key)    //Removes The Key
// }

// if (key == "0") {
//     localStorage.clear()    // Delete Entire Local Storage
// }
// console.log(localStorage.key(2));   // Get The Key At 2 Index

// console.log(localStorage.length);   // Gives the total No. of key 

// localStorage.one = "Myname" //  Another Way to Store Key value: One is key

window.onstorage = (e)=>{
    alert("changed")
    console.log(e);
}
