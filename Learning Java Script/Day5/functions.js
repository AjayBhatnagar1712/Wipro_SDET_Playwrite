function my_first_js_function() {
    console.log("Print the first  funtion is created for practice");
}

my_first_js_function();

function newfunction(msg) {
    console.log(msg);
}

newfunction("Its just me myself and i solo ride untill i die ");



function mysum(a,b) {
    return a + b;
}

console.log(mysum(10,20));


//Creating a arrow function

const arrow_sum = (x,y) => {
    console.log(x*y);
}
console.log(arrow_sum(7,8));

const printhello = () =>{
    console.log("Hello World");
};


let arr = [1,2,3,4,5];
arr.forEach((num,id,arr) => {
    console.log(num * 2, "At Index :- ", "Of this array :- ", arr)
});
