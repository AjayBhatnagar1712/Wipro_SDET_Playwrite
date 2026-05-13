// Question 3: Exhaustiveness Checking with never

type TaskStatus = "Open" | "InProgress" | "Closed" | "Archived";

function handleTask(status: TaskStatus): string {
  switch (status) {
    case "Open":
      return "Task is open.";

    case "InProgress":
      return "Task is currently in progress.";

    case "Closed":
      return "Task is closed.";

    case "Archived":
      return "Task has been archived.";

    default: {
      const exhaustiveCheck: never = status;
      return exhaustiveCheck;
    }
  }
}

console.log(handleTask("Open"));
console.log(handleTask("Archived"));

// Test:
// Remove the "Archived" case above while keeping "Archived" in TaskStatus.
// TypeScript will fail because status cannot be assigned to never.
