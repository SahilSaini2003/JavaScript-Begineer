class Employee{
    constructor(name) {
        this.name = name
        console.log(`I am Constructor of Employee ${this.name}`);
    }
    login(){
        console.log("Employee Successfully Loged In!");
    }
    logout(le="Employee"){
        console.log(`${le} Successfully Loged Out!`);
    }
}

class Programmer extends Employee{

    // JS Compiler Automatically adds Constructor of Parent Class to Child Class[If Not Present in Child Class].
    // constructor(...args){   // Similar to These 3 Lines
    //     super(...args)
    // }

    constructor(name) {
        super(name) // Without this Produce an Error !!
        console.log("Programmer Constructor!!");
    }
    login(){
        console.log("Programmer Successfully Loged In!");
    }
    logout(){
        super.logout("Programmer")
    }
}

let p = new Programmer("Sahil")