let age = 25;
if (age>=18){
    console.log("can vote");
}

let mode = "System mode";
let color;

if(mode === "dark"){
    color = "Black";
}
else if(mode === "System mode"){
    color = "System color";
}
else{
    color = "white";
}

console.log(color);


//Ternary Operators:
let cars = 6;
console.log(cars>2 ? "You are very rich" : "You are middle class or very poor");