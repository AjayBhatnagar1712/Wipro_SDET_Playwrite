let heroes = ["spiderman", "ironman", "batman"];
heroes.push("Captain America")
console.log(heroes)
heroes.pop()
console.log(heroes)
console.log(heroes.toString())
console.log(heroes)



let x = [1,2,3,4,5];
let y = [6,7,8,9];
let all_nums = x.concat(y);
console.log(x);
console.log(y);
console.log(all_nums);

//to add at start
all_nums.unshift(0);
console.log(all_nums);

//to delete from start

all_nums.shift();
console.log(all_nums);

//slicing a array
console.log(all_nums.slice(0,5));

//changes the prigional array by splice 
all_nums.splice(5,4,9,8,7,4);
console.log(all_nums)