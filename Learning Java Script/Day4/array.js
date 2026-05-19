let marks = [99,97,96,95];
console.log(marks);
console.log(marks.length);

let heroes = ["spiderman", "ironman", "batman"];

console.log(heroes[0]);
heroes[0] = "Ajay";
console.log(heroes[0]);

for(let i = 0; i < heroes.length; i++ ){
    console.log(heroes[i]);
}

//accessing by for of loop
for(let hero of heroes){
    console.log(hero);
}


for(let hero of heroes){
    console.log(hero.toUpperCase());
}