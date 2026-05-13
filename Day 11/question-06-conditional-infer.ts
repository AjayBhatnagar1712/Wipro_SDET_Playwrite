// Question 6: Conditional Types and the infer Keyword

type UnwrapPromise<T> = T extends Promise<infer ResolvedType>
  ? ResolvedType
  : T;

type UserPromise = Promise<{ id: number; name: string }>;
type User = UnwrapPromise<UserPromise>;
type PlainString = UnwrapPromise<string>;

const user: User = {
  id: 1,
  name: "Aarav",
};

const message: PlainString = "This was not wrapped in a Promise.";

console.log(user);
console.log(message);
