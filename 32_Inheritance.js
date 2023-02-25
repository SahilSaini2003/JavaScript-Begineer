class School{   // Creating School Class...
    run(){
        console.log("Welcome to School Class ! ! !");
    }
}

class Student extends School{  // Inheritance
    setStudentName(a){
        this.name = a;
    }
    getStudentName(){
        console.log("My Name is "+this.name);
    }
}

let obj = new Student()
obj.run()
obj.setStudentName("Sahil Saini")
obj.getStudentName()