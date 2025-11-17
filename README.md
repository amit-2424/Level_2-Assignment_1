------------------------------------------------------------------------------------------------------------
                                                              # Blog-1
------------------------------------------------------------------------------------------------------------
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
                                                              # Blog-2
------------------------------------------------------------------------------------------------------------

# ⭐ Union and Intersection Types in TypeScript

TypeScript offers effective ways to define and combine types, which makes your code safer and more expressive. Two key concepts in TypeScript are Union Types and Intersection Types. While they may sound similar, they have different purposes.
## 1. Union Types
A Union Type allows a variable to hold multiple possible types. It’s defined using the | (pipe) symbol.
Example:
```
let value: string | number;

value = "Hello"; //  valid
value = 42;      //  valid
// value = true; //  Error
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

------------------------------------------------------------------------------------------------------------
                                                              # Blog-3
------------------------------------------------------------------------------------------------------------

# ⭐ What is an Enum in TypeScript?

An enum (short for enumeration) is a way to define a set of named constants.
Enums make your code more readable, maintainable, and less error-prone by giving meaningful names to numeric or string values instead of using raw numbers or strings.

## 1. Numeric Enum Example
Numeric enums assign numbers to names. By default, the first member is 0 and increments automatically.
```
enum Direction {
  Up,     // 0
  Down,   // 1
  Left,   // 2
  Right   // 3
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0

You can also manually set numbers:

enum Direction {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4
}
```

## 2. String Enum Example
String enums assign custom string values to names. They are useful when you want the value to be human-readable.
```
enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
  Pending = "PENDING"
}

let currentStatus: Status = Status.Success;
console.log(currentStatus); // Output: SUCCESS
```
## Why Use Enums?
Improve readability (Direction.Up vs 0)
Reduce hard-coded errors
Make grouped values easy to manage

------------------------------------------------------------------------------------------------------------
                                                              # Blog-4
------------------------------------------------------------------------------------------------------------
# ⭐ Difference between any, unknown, and never types in TypeScript:
## 1. Any Type
The any type is the escape hatch in TypeScript.
It allows a variable to hold any value without type checking.
Using any disables type safety, so TypeScript won’t check what you do with it.
Example:
```
let value: any;

value = 10;       // ✅ valid
value = "hello";  // ✅ valid
value = true;     // ✅ valid

value.toUpperCase(); // ✅ No error at compile-time (might fail at runtime)
```
Use: When you want to gradually migrate JavaScript to TypeScript or temporarily bypass type checks.

## 2. Unknown Type
unknown is similar to any, but safer.
You cannot use or access a value of type unknown without first checking its type.
TypeScript enforces type checking before it is used.
Example:
```
let value: unknown;
value = 10;       
value = "hello";  

// value.toUpperCase(); // Error: Object is of type 'unknown'

if (typeof value === "string") {
  console.log(value.toUpperCase()); // Safe after type check
}
```
Use: When you accept dynamic data but want to enforce type safety before usage.

## 3. Never Type
The never type represents values that never occur.
It is commonly used in functions that always throw errors or never return.
Example:
```
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```
Use: To indicate unreachable code or impossible cases in type narrowing.

## Summary:
Use it carefully — it disables safety.
Use unknown for type-safe dynamic data.
Use never for impossible or non-returning scenarios.

------------------------------------------------------------------------------------------------------------
                                                              # Blog-5
------------------------------------------------------------------------------------------------------------
# ⭐ What is keyof in TypeScript?
The keyof keyword is used to create a union type of all the keys of an object type.
It is helpful when you want to restrict a value to the property names of an object.
Example:
```
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

// keyof creates a union of all keys: "name" | "age" | "isStudent"
type PersonKeys = keyof Person;

let key: PersonKeys;

key = "name";       //  valid
key = "age";        //  valid
key = "isStudent";  //  valid
// key = "gender";  //  Error: Type '"gender"' is not assignable to type 'PersonKeys'
```
## Practical Usage:
You can use keyof to create generic functions that only accept valid object keys:
```
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "Amit", age: 23, isStudent: true };

const personName = getValue(person, "name"); // "Amit"
// const personGender = getValue(person, "gender"); //  Error
```
K extends keyof T ensures key is one of the keys of the object.
T[K] represents the type of the value corresponding to that key.

## Summary:
Keyof helps make type-safe property access.
It prevents mistakes by allowing only valid keys of an object.
Commonly used with generic functions for safer operations.
