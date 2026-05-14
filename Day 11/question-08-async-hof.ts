// Question 8: Async Higher-Order Function

function safeExecute<Args extends unknown[], T>(
  asyncFunction: (...args: Args) => Promise<T>,
): (...args: Args) => Promise<T | null> {
  return async (...args: Args): Promise<T | null> => {
    try {
      return await asyncFunction(...args);
    } catch (error: unknown) {
      console.error("Async function failed:", error);
      return null;
    }
  };
}

async function divideNumbers(a: number, b: number): Promise<number> {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }

  return a / b;
}

const safeDivide = safeExecute(divideNumbers);

safeDivide(10, 2).then((result) => console.log("Success:", result));
safeDivide(10, 0).then((result) => console.log("Failure:", result));
