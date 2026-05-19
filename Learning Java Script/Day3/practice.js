for(let i=1; i <=5; i++){
    console.log("Ajay")
}

//while loop

let j =1;
while(j<=9){
    console.log("Ajay by while loop")
    j++
}


//do-while

let l=1;
do{
    console.log("Ajay by do while");
    l++;
}while(l<=8)

//for-of loop:- help us to iterate over sting and array
let size = 0;
let str = "AjayBhatnagar";
for(let i of str){
    console.log("i = ", i)
    size++
}
console.log(size)


//for-in loop is used to iterate over objects in javascript 
let student = {
    name : "Rahul Kumar",
    age : 19,
    cgpa : 7.5,
    ispass : true, 
}

for(let i in student){
    console.log("Key = ",i, "   Value = ",student[i])
}