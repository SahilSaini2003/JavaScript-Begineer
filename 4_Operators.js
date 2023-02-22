// Operators

// 1. Arthemetic Operators
let a = 50;
let b = 6;
console.log("a + b :",a+b); // Addition
console.log("a - b :",a-b); // Subtraction
console.log("a * b :",a*b); // Multiplication
console.log("a ** b :",a**b); // Exponentiation
console.log("a / b :",a/b); // Division 
console.log("a % b :",a%b); // Modulus
// Increment
console.log("a++ :",a++); // Prints The Value Then do Increment
console.log("b-- :",b--); // Prints The Value Then do Decrement
console.log("a:",a);
console.log("b:",b);
console.log("++a :",++a); //  do Increment Then Prints The Value
console.log("--b :",--b); //  do Decrement Then Prints The Value 
console.log("a:",a);
console.log("b:",b);

// 2. Assignment Operatora
a = 5;
b = 7;
console.log("a += b:", a+=b); //a = a + b
console.log("a -= b:", a-=b); //a = a - b
console.log("a *= b:", a*=b); //a = a * b
console.log("a /= b:", a/=b); //a = a / b
console.log("a %= b:", a%=b); //a = a % b
console.log("a **= b:", a**=b); //a = a ** b
console.log("a = b:", a=b);
console.log("a:", a);

// 3. Comparison Operators
a = 6;
b = 5;
console.log("a == b",a==b); // Equals to
console.log("a != b",a!=b); // not Equals to
console.log("a === b",a===b); // Equals Value and Type
console.log("a !== b",a!==b); // not Equals Value Or Not Equals Type
console.log("a > b",a>b); // Greater Than
console.log("a < b",a<b); // Lower Than
console.log("a >= b",a>=b); // Greater Than or Equals To
console.log("a <= b",a<=b); // Less Than Or Equals To
// Turnary Operator (condition ? 'yes' : 'No') 
console.log("true ? 5 : 6",true?5:6);
console.log("false ? 5 : 6",false?5:6);
console.log("a>b ? \"a is Greater\" : \"a is Smaller\":",a>b?"A is Greater":"A is Smaller");

// 4. Logical Operators
// &&  Logical AND
a = 5;
b = 6;
c = 4;
console.log(a>b && a>c);
// || Logical OR
console.log(a>b || a>c);
// !  Logical NOT
console.log(!(a>b || a>c));
