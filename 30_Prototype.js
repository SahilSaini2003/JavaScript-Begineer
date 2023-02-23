let item ={
    Name : "Sahil",
    Couse : "B.tech",
    Percentage : 90,
    run:()=>{
        console.log("I am Running using Proto.");
    }
}
// Every js Object has an Prototype Property
// which can Be used Create Prototype of Existing Object, With additional Features.

let Prototype ={
    Sem:"3rd",
    Subject:"Hindi"
}

Prototype.__proto__ = item  // Prototype of item is created i.e. Prototype
// This is Used Before Arrival Of OOPS in js.(A bit Similar to Inheritance.)
// Multiple Prototypes can be Created.

console.log(Prototype.Name);
console.log(Prototype.Couse);
console.log(Prototype.Subject);
console.log(item.Subject);

Prototype.run()

// Prototype has some methods
console.log(Prototype.isPrototypeOf(item))
console.log(item.isPrototypeOf(Prototype))
// There are many Methods to see them
//Create Object in Browser Console and print it You will see all Available Methods.