//1. Object destructuring...

// let obj = {
//   name: "Akash Kumar Sharma",
//   age: 30,
//   desc: "UI Developer",
//   address: {
//     city: "Noida",
//     pin: 201301,
//   },
// };

// let {
//   name,
//   age,
//   desc,
//   address: { city, pin },
// } = obj;

// console.log(name, age, desc, pin);

//2. Array destructuring...
// let arr = [1, 2, 3, "Sonu", "true"];
// let [a, b, c, name, boolean] = arr;
// console.log(a, b, c, name, boolean);

//3. Array destructuring with rest...
// let arr = [1, 2, 3, "Sonu", "true", "Noida"];
// let [a, b, c, ...d] = arr;
// console.log(a, b, c, d);

//4. default values...
// let arr = [51, 52, 53, , 55];
// let [a, b, c, d = 0, e] = arr;
// console.log(a, b, c, d, e);

//5. skip values...
// let arr = [10, 20, 30, 40, 50, 51];
// let [a, , , , e, f] = arr;
// console.log(a, e, f);

//6. swap two numbers
// let a = 10;
// b = 20;
// [a, b] = [b, a];
// console.log(a, b);

//7. nested destructuring...
// let arr = [1, 2, 3, [4, 5, [6, 7]]];
// let [a, b, c, [x, y, [h, i]]] = arr;
// console.log(a, b, c, x, y, h, i);

//8. Object destructuring with rest operator
// let obj = {
//   name: "Akash Kumar Sharma",
//   age: 30,
//   desc: "UI Developer",
//   city: "Noida",
//   pin: 201301,
// };
// let { name, age, desc, ...other } = obj;
// console.log(name, age, desc, other);

//9. Nested objection...
let obj = {
  name: "Akash Kumar Sharma",
  age: 30,
  desc: "UI Developer",
  address: {
    city: "Noida",
    pin: 201301,
    arr: [1, 2, 3],
  },
};

let {
  name: fullName,
  age,
  address: {
    city,
    pin: pincode,
    arr: [a, b, c],
  },
} = obj;
console.log(fullName);
console.log(age);
console.log(city);
console.log(pincode);
console.log(a, b, c);
