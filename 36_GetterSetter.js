class Student{
    setName(Name){
        this.Name = Name
    }
    getName(){
        return this.Name
    }
}

let s = new Student

s.setName("Sahil")
console.log(s.getName());

console.log(s instanceof Student)   //used to Check Weather an Object Belongs to A Class