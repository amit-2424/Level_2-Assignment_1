# ⭐ Differences Between **Interfaces** and **Types** in TypeScript

## 🔍 1. Syntax & Basic Usage

### **Interface**
Used mainly for describing object shapes and class structures.

```ts
interface User {
  name: string;
  age: number;
}
Type
More flexible. Can describe objects, unions, intersections, primitives, and tuples.

ts
Copy code
type User = {
  name: string;
  age: number;
};
⚡ 2. Extending / Inheritance
Interface – uses extends
ts
Copy code
interface A {
  x: number;
}

interface B extends A {
  y: number;
}
Type – uses intersection (&)
ts
Copy code
type A = { x: number };
type B = A & { y: number };
🧩 3. Declaration Merging
Interfaces can be merged
ts
Copy code
interface User {
  name: string;
}

interface User {
  age: number;
}

// Result: { name: string; age: number }
Types cannot be re-declared
ts
Copy code
type User = { name: string };
type User = { age: number }; // ❌ Error
🛠️ 4. Flexibility Comparison
Feature	Interface	Type
Object shapes	✔	✔
Unions	❌	✔
Tuples	❌	✔
Primitives	❌	✔
Declaration merging	✔	❌
Extending	✔	✔ (via &)

🎯 5. When Should You Use What?
✅ Use Interface When:
Defining object or class structures

You want declaration merging

You want a clean API-like structure

✅ Use Type When:
You need unions, intersections, tuples, or complex types

You want more flexibility

You don’t need merging

📌 Summary
Both interfaces and type aliases allow you to define types in TypeScript, but:

Interface = great for object structures & extendable APIs

Type = best for unions, tuples, intersections, primitives & complex types

Choose based on what makes your code more readable and maintainable.

------------------------------------------------------------------------------------------------------------------------

# ⭐ Understanding **Union** and **Intersection** Types in TypeScript (With Examples)

## 🔵 What is a Union Type?

A **union type** allows a variable to hold **one of several types**.  
It represents values that can be **“this OR that.”**

### ✔ Example: A variable that accepts a string or a number
```ts
let userId: string | number;

userId = 101;        // valid
userId = "Amit";     // valid
Here, userId can be either a string or a number.

✔ Practical Example: Function using union types
ts
Copy code
function printValue(value: string | number) {
  console.log(`Value is: ${value}`);
}

printValue(100);     // valid
printValue("Hello"); // valid
🔹 Use union types when a value can vary, but the operation remains the same.

🟢 What is an Intersection Type?
An intersection type combines multiple types into one.
It represents values that must include “this AND that.”

Intersection types merge all properties from the types involved.

✔ Example: Combining two types
ts
Copy code
type Name = { name: string };
type Age = { age: number };

type Person = Name & Age;

const p: Person = {
  name: "Amit",
  age: 23,
};
The Person type must include both name and age.

✔ Practical Example: Combining independent features
ts
Copy code
type Developer = { skills: string[] };
type Employee = { id: number };

type DevEmployee = Developer & Employee;

const emp: DevEmployee = {
  id: 1,
  skills: ["TypeScript", "React"],
};
🔹 Use intersection types when merging multiple structures into a more detailed type.

🔸 Union vs. Intersection — Quick Comparison
Feature	Union Type (A | B)	Intersection Type (A & B)
Meaning	Either one	Must include all
Logic	OR	AND
Example	string | number	{ name } & { age }
Use Case	Flexible input types	Combine multiple structures

✅ Final Thoughts
Union types give you flexibility when a value can be more than one type.

Intersection types allow you to merge multiple types into one detailed type.

Both are extremely powerful for writing clean, scalable, and type-safe TypeScript applications.

