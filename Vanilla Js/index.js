"use strict"
//  Array.prototype.ak="sajkh";

// let arr=[1,2,3];
// arr.__proto__.x="akhg";

// let y="ankush";

// let ans = true;

// let arr=[1,2,3,4,5];

// let ans = arr.reduce(((acc,cur)=>{
//     acc=acc+cur;
//     return acc;
// }),0);

// console.log(ans);

let arr = [ 2,56,34,8,10,39];

// let ans = arr.reduce((acc,cur)=>{
//     if(acc>cur){
//         acc=cur; 
//     }
//     return acc;
// },Infinity);

// let sum=0;
// let ans=arr.map((ele)=>{
//     sum+=ele;
//     console.log(sum);
//     return sum;
// })

// console.log(ans);

let person ={
    name:"ankush",
    age:23,
    sayHello: (greet,time)=>{
         console.log(`${greet} ${this.name} good${time}`)
    }
}
function xyz(){
    console.log(this);
}
// xyz();

// const person2={name:"vikas"};

// person.sayHello.call(person2,"hi","morning");
// person.sayHello.apply(person2,["hi","morning"]);
// const result = person.sayHello.bind(person2,"hi");
// result("morning");

// const arrowFunction = () => {
//     setTimeout(() => {
//       console.log("Arrow Function - this:", this); // 'this' is the same as the surrounding context
//     }, 2000);
//   };
//   arrowFunction()
  

// const add = function(x,y){
//   console.log(x+y);
// }

// const res = add.bind( null,5);
// res(5);

function curryAdd(x) {
   (y) =>{ x + y};
}
console.log(curryAdd(56)(1))