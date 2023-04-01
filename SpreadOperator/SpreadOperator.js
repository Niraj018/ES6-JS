var arr1 = [2, 3, 4];
function sum() {
  arr2 = [...arr1, 3, 4, 7];
  arr1[1] = 0;
}
sum();
console.log(arr1);
console.log(arr2);

//  with the spread operator we can assign the value of one object such as an array to a different array while the previous array elements being changed after the value is assigned and the value assigned to new array will not change as in example above
