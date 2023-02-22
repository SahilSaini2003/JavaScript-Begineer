try {
    // console.log(a);
    
    // Custom Error!!!!!!!
    // throw new Error("Empty Try")  
    // throw new ReferenceError("Empty Try")
    throw new SyntaxError("Empty Try")
} catch (error) {
    console.log("Error Occured: "+error);
    console.log(error.name)
    console.log(error.message)
    console.log(error.status)
}
finally{
    console.log("I Will Run in Every Condition!!");
}