function countvowels(str) {
    let sum = 0;
    for(const char of str){
        if(char === "a"){
            sum++;
        }
        else if(char === "e"){
            sum++;
        }
        else if(char === "i"){
            sum++;
        }
        else if(char === "o"){
            sum++;
        }
        else if(char === "u"){
            sum++;
        }
    }
    return sum;
}

console.log(countvowels("ajay"))


//for each loop on array for a function
