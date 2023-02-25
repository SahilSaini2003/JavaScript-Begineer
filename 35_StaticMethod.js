class Running{
    static run(){
        console.log("I am Static Method!"); // Can Only be Called Using Class Name!
    }
}

let r = new Running
// r.run() // Produce an Error

Running.run()
