//  Spread array
// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr, 6, 7];
// console.log(newArr);

//  Shallow copy
// let arr = [2, 4, 6, 8];
// let copyArr = [...arr];
// copyArr.push(1);
// console.log(copyArr);
// console.log(arr);

//  Merge two array
// let arr1 = ["aman", "sonu", "vinay"];
// let arr2 = ["kalu", "sonam", "nidhi"];
// let mergeArr = [...arr1, ...arr2];
// console.log(mergeArr);

// Spread string
// let str = "Akash Sharma";
// let arr = [...str];
// console.log(arr);

// Spread in function call
// let students = ["Akash", "Rohit", "Sanjay"];
// function printAll(st1, st2, st3) {
//   console.log(st1);
//   console.log(st2);
//   console.log(st3);
// }
// printAll(...students);

// Spread Object
// let obj = {
//   name: "Akash",
//   city: "noida",
//   age: 30,
// };
// let objCopy = { ...obj, age: 28, city: "gzb" };
// objCopy.name = "Sonu";
// console.log(objCopy);
// console.log(obj);

// Merge two Objects
// let obj1 = {
//   name: "Akash Sharma",
//   city: "noida",
//   age: 30,
// };
// let obj2 = {
//   name2: "Sonu Sharma",
//   city2: "Ghaziabad",
//   age2: 28,
// };
// let mergeObjs = { ...obj1, ...obj2 };
// console.log(mergeObjs);

// REST
// function addNums(...arr) {
//   let sum = arr.reduce((acc, current) => {
//     return acc + current;
//   });
//   return sum;
// }
// let result = addNums(1, 2, 3, 4, 5, 6);
// console.log(result);

// REST with destructruing Array
// let arr = ["Akash", "Sonu", "Vijay", "Aman", "Anuj", "Ajit"];
// let [first, second, ...others] = arr;
// console.log(first);
// console.log(second);
// console.log(others);

// REST with destructruing Objects
let obj = {
  name: "Akash Sharma",
  age: 30,
  city: "Noida",
  desig: "UI Developer",
};

let { name, age, ...others } = obj;
console.log(name);
console.log(age);
console.log(others);
