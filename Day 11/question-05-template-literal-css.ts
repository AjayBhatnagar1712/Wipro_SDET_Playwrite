// Question 5: Template Literal Types for CSS

type CssUnit = "px" | "rem" | "vh";
type MarginValue = `${number}${CssUnit}`;

const smallMargin: MarginValue = "10px";
const mediumMargin: MarginValue = "2rem";
const largeViewportMargin: MarginValue = "15vh";

console.log(smallMargin, mediumMargin, largeViewportMargin);

// TypeScript will reject values without a number or unsupported units:
// const invalidMarginOne: MarginValue = "px";
// const invalidMarginTwo: MarginValue = "10em";
