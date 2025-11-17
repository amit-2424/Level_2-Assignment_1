// Solution 1
type inputType = string | number | boolean;

const formatValue = (input: inputType): inputType => {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return !input;
  }
};

// Solution 2
type paraType = string | any[];

const getLength = (input: paraType): number => {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  } else {
    throw new Error("Wrong Input");
  }
};

// Solution 3
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

// Solution 4
type arrayOfObj = { title: string; rating: number }[];

const filterByRating = (input: arrayOfObj): arrayOfObj => {
  let result = input.filter((item) => item.rating >= 4);
  return result;
};

// Solution 5
type arrOfObj = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}[];

const filterActiveUsers = (input: arrOfObj): arrOfObj => {
  let result = input.filter((item) => item.isActive === true);
  return result;
};

// Solution 6
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (input: Book): void => {
  console.log(
    `Title: ${input.title}, Author: ${input.author}, Published: ${
      input.publishedYear
    }, Available: ${input.isAvailable ? "Yes" : "No"}`
  );
};

// Solution 7
type arr = (number | string)[];

const getUniqueValues = (arr1: arr, arr2: arr): arr => {
  let newArr: arr = [...arr1];

  for (let i = 0; i < arr2.length; i++) {
    let exists = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr2[i] === newArr[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
};

// Solution 8
type products = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}[];

const calculateTotalPrice = (input: products): number => {
  if (input.length === 0) return 0;

  return input.reduce((total, product) => {
    let productTotal = product.price * product.quantity;

    if (product.discount !== undefined) {
      productTotal = productTotal - (productTotal * product.discount) / 100;
    }
    return total + productTotal;
  }, 0);
};
