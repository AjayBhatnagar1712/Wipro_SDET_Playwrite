let a= "Aaryan";
let b = "Arush";
let c = "Arushi";

let d = "Hello "+ a + ", "+b+ " and " + c+ "!";
// console.log(d);

let e = `Hello ${a}, ${b} and ${c}!`;
// console.log(e);

let f = `The length of a is ${a.length * 2}`;
// console.log(f);


//Function

// function greet(name){
//     return `Hello, ${name}!`;
// }
// console.log(greet("Pratiksha"));




// function table(num){
//     for(let i =1;i<=10;i++){
//         // console.log(num + " x "+i + " = " + (num*i));
//         console.log(`${num} * ${i} = ${num*i}`);
//     }
// }


// table(5);


//Arrow function

let sum1 =(x,y)=>{
   return x+y;
}
    

console.log(sum1(5,6));


let sum2 =(x,y)=> x+y;
console.log(sum2(4,4));


let arr = [1, 2, true, "name", 5];

// arr.map(x => x*5);
// arr.forEach(function(x){
//     console.log("Element after * 2:", x*2)
// })

arr.filter(x => typeof(x) === "number").map(x => x*5).forEach(x=> console.log("Element after *2: ",x*2 ))