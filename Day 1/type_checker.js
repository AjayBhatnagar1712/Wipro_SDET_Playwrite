function checkType(input) {
  if (typeof input === "number") {
    console.log("This is a number");
  } else if (typeof input === "string") {
    console.log("This is a string");
  } else {
    console.log("This is something else!");
  }
}
checkType(4.2);      
checkType("amitansh"); 