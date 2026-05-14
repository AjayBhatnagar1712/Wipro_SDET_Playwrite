// Question 7: The Union Manipulation Puzzle

type AllEvents = "click" | "dbclick" | "submit" | "reset" | "keypress";

type MouseEvents = Extract<AllEvents, "click" | "dbclick">;
type NonFormEvents = Exclude<AllEvents, "submit" | "reset">;

const mouseEventOne: MouseEvents = "click";
const mouseEventTwo: MouseEvents = "dbclick";

const nonFormEventOne: NonFormEvents = "click";
const nonFormEventTwo: NonFormEvents = "keypress";

console.log(mouseEventOne, mouseEventTwo);
console.log(nonFormEventOne, nonFormEventTwo);

// TypeScript will reject these invalid assignments:
// const invalidMouseEvent: MouseEvents = "submit";
// const invalidNonFormEvent: NonFormEvents = "reset";
