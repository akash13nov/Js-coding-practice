/* 1.Find largest element in an array.
let arr = [10, 20, 45, 34, 99, 56, 178];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);


2.Find smallest element in an array
let arr = [10, 20, 45, 34, 99, 6, 5];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(min);


 3. Find largest element and its index
let arr = [12, 96, 69, 77, 145, 20];
let max = arr[0];
let maxIndex = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    maxIndex = i;
  }
}
console.log(`Max element = ${max} found at index ${maxIndex}`);


 4. Find smallest element and its index
let arr = [12, 96, 69, 7, 145, 20];
let min = arr[0];
let minIndex = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
    minIndex = i;
  }
}
console.log(`Min element = ${min} found at index ${minIndex}`);


5. Find sum of array elements
let arr = [12, 96, 69, 7, 145, 20];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(sum);


6. Find mean (average) of array
let arr = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
let mean = sum / arr.length;
console.log(mean);


7. Count even and odd numbers
let evenCount = 0;
let oddCount = 0;
for (let i = 1; i <= 15; i++) {
  if (i % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}
console.log("Total Even number count is : " + evenCount);
console.log("Total Odd number count is : " + oddCount);


8.Count positive and negative numbers
let arr = [10, -34, 20, -55, 78];
let positiveNum = 0;
let negativeNum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    positiveNum++;
  } else if (arr[i] < 0) {
    negativeNum++;
  }
}
console.log(positiveNum);
console.log(negativeNum);


** Print first & last array.
let arr = [12, 15, 38, 45, 76, 89];
let first = arr[0];
let last = arr[arr.length - 1];
console.log(first, last);


9. Reverse an array
let arr = [12, 15, 38, 45, 76, 89];
let i = 0;
j = arr.length - 1;
while (i < j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++;
  j--;
}
console.log(arr);


10. Remove duplicate elements
let arr = [1, 2, 3, 2, 4, 1, 5];
let uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
  if (!uniqueArr.includes(arr[i])) {
    uniqueArr.push(arr[i]);
  }
}
console.log(uniqueArr);


13. Find second largest element
let arr = [10, 20, 45, 4, 78, 95, 104];
let max = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);
for (let i = 2; i < arr.length; i++) {
  if (arr[i] > max) {
    sMax = max;
    max = arr[i];
  } else if (arr[i] > sMax && arr[i] != max) {
    sMax = max;
  }
}
console.log(sMax);


14. copy and reverse array
let arr = [10, 20, 45, 4, 68, 78, 104];
let arr2 = [...arr].reverse();
console.log(arr2);


15. array rotation by 1
let arr = [1, 2, 3, 4, 5];
let k = 1;
for (let i = 1; i <= k; i++) {
  let temp = arr[0];
  for (let j = 1; j < arr.length; j++) {
    arr[j - 1] = arr[j];
  }
  arr[arr.length - 1] = temp;
}
console.log(arr);


16.  Move all 0 to left and 1 is right
let arr = [1, 1, 0, 1, 0, 1, 0, 0, 1];
let i = 0;
let j = 0;
while (i < arr.length) {
  if (arr[i] == 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
  i++;
}
console.log(arr);


17.  Move all 0 to right and 1 is left
let arr = [1, 1, 0, 1, 0, 1, 0, 0, 1];
let i = 0;
let j = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
}
console.log(arr);
*/

// 18.
