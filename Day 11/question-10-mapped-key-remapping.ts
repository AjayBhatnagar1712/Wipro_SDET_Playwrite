// Question 10: Mapped Types with Key Remapping

interface Car {
  make: string;
  model: string;
}

type ApiResponse<T> = {
  [Key in keyof T as `DATA_${Uppercase<string & Key>}`]: T[Key];
};

const carResponse: ApiResponse<Car> = {
  DATA_MAKE: "Toyota",
  DATA_MODEL: "Corolla",
};

console.log(carResponse);

// TypeScript will reject unprefixed or lowercase keys:
// const invalidCarResponse: ApiResponse<Car> = {
//   make: "Toyota",
//   model: "Corolla",
// };
