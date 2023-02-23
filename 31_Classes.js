class Student{  // Creating Student Class...
    constructor(){
        console.log("Let's Gooooo...");
    }
    setName(a){
        this.name = a;
    }
    getName(){
        console.log("My Name is "+this.name);
    }
}

let Sahil = new Student() // Creating Object of Student.
let Sam = new Student() // Creating Object of Student.

Sahil.setName("Sahil Saini")
Sam.setName("Sam")

Sahil.getName()
Sam.getName()