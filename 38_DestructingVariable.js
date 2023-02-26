// let arr = [1,2,3]
// let [a,b,c] = arr    // This Is said To be Destructing
// console.log(a,b,c);

let arr = [1,2,3,4,5,6,7]
// let [a,b,...rest] = arr  //...rest will take all the that is left.
let [a, , ,b,...rest] = arr // 2,3 will not be included.
console.log(a,b,...rest);

let {c,d} = {c:1,d:2}
console.log(c,d);
// For more Examples
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment


let obj = {...arr}
console.log(obj);
// For more Examples
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax