class Employee{
    login(){
        console.log("Employee Successfully Loged In!");
    }
    logout(le="Employee"){
        console.log(`${le} Successfully Loged Out!`);
    }
}

class Programmer extends Employee{
    login(){    // Method Overriding!!!!
        console.log("Programmer Successfully Loged In!");
    }
    logout(){
        super.logout("Programmer")  // Used to called The same Function of Parant Class!!!
        super.login()
    }
}

let e = new Employee
e.login()
e.logout()

let p = new Programmer
p.login()
p.logout()