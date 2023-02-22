let a = [1,2,3,null,true,"Sahil"]
console.log(a)
console.log(a[6])  //if value is not givien it return Undefined
a[2] = "Changed"
console.log(a)


// Array Methods
a = [1,2,3,4,5,6,7,8,9]
let h = [1133,222,133] 
let b = a.toString()  //Converts Array TO String
console.log(b);
let c = a.join("-") // Joins Elements of Array 
console.log(c);
let d = a.pop() // Remove the Lsst Value Of Array & Returns the popped Elements
console.log(a,d);
let e = a.push(3) // Adds New Element at the Last & Returns THe Length of New Array 
console.log(a,e);  
let f = a.shift() // Remove !st Element of Array & Returns the popped Elements
console.log(a,f);
let g = a.unshift("!st") // Adds New Element at the Starting & Returns THe Length of New Array 
console.log(a,g);
delete a[2] // Deletes The Element but dont Effect The Length of Array
console.log(a);
let i = a.concat(h) // Adds Two or More array 
console.log(i)
let j =h.sort() // It sort as String
console.log(h);

// Ascending order
let compare = (a,b)=>{
        return a-b
}
j = h.sort(compare)
console.log(j);
// Decending order
compare = (a,b)=>{
    return b-a
}
j = h.sort(compare)
console.log(j);

// arrayName.splice ( indexWhereToAdd, HowMAnyItemsToDelete, ElementsToAdd ) 
j = a.splice(2,2,12,23,34,455) //Returns Deleted Items of Array
console.log(a,j);
console.log(a.slice(3));
console.log(a.slice(3,6));
console.log(a.reverse()) // Reverse Existing Array


//Printing Arrays
//for loop
for (let i = 0; i < a.length; i++) {
        console.log(a[i])
}
//for in loop
for(let b in a){
    console.log(a[b]);
}
// for of loop
for(let b of a){
    console.log(a[b-1]);
}
//for each loop
a.forEach((Elements)=>{
    console.log(Elements);
})
// MAP  // map returns a new array but for each dont
b = a.map((value, Index, Array)=>{  // can be done in for each too
    console.log(value, Index, Array);
    return value+3
})
console.log(b);
b = a.filter((value)=>{  // filters an array and return values that says true
    return value<5
})
console.log(b);
console.log(Array.from("Sahil")); // Creats An array of the iterables
b = a.reduce((n,n1)=>{
    return n+n1
})
console.log(b);