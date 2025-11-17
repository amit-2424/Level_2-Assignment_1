# ⭐ Differences Between **Interfaces** and **Types** in TypeScript

## 🔍 1. Syntax & Basic Usage
Interfaces and type aliases in TypeScript are often similar, but they have key differences that affect when you should use each.

## 1. Syntax & Usage
Interface: Best for describing object shapes and class structures.
Type: Can describe objects, unions, intersections, primitives, tuples, and more.
```
interface User { name: string }
type User = { name: string }
```
## 2. Extending
Interface: Uses extends.
Type: Uses intersection (&).
```
interface A { x: number }
interface B extends A { y: number }

type A = { x: number }
type B = A & { y: number }
```
## 3. Declaration Merging
Interface: Supports merging (can be re-declared).
Type: Cannot be re-declared.
```
interface User { name: string }
interface User { age: number }
```
## 4. Flexibility
Interface: Limited to object-like structures.
Type: More flexible — supports unions, tuples, primitives.
```
type ID = string | number;
type Pair = [number, number];
```

## When would you like to Use What?
Use Interface: For objects, classes, and extendable APIs.
Use Type: For unions, intersections, tuples, and advanced type structures.

------------------------------------------------------------------------------------------------------------

# ⭐ Union and Intersection Types in TypeScript

TypeScript offers effective ways to define and combine types, which makes your code safer and more expressive. Two key concepts in TypeScript are Union Types and Intersection Types. While they may sound similar, they have different purposes.
## 1. Union Types
A Union Type allows a variable to hold multiple possible types. It’s defined using the | (pipe) symbol.
Example:
```
let value: string | number;

value = "Hello"; // ✅ valid
value = 42;      // ✅ valid
// value = true; // ❌ Error
```
Union types are useful when a value can be one of several types, like input parameters that may accept either a string or a number.

## 2. Intersection Types
An Intersection Type combines multiple types into one. A variable of an intersection type must satisfy all the types at once. It’s defined using the & symbol.
Example:
```
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  role: string;
};

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Amit",
  age: 23,
  employeeId: 101,
  role: "Developer"
};
```
Here, the staff member must have all properties from both Person and Employee. This is helpful when you want to merge multiple type definitions.

## 3. Combining Union and Intersection Types
You can also combine union and intersection types for more complex scenarios.
```
type Admin = {
  role: "admin";
  privileges: string[];
};

type User = {
  role: "user";
  points: number;
};

type PersonType = Admin | User;
type ActivePerson = PersonType & { active: boolean };
```
Here, ActivePerson is either an Admin or a User, but it must also include the active property.

## Summary:
Union (|): A variable can be one of several types.
Intersection (&): A variable must satisfy all the combined types.
Using these features makes your TypeScript code more flexible, type-safe, and easier to maintain.
