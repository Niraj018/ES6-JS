const elems = [1, 2, 3, 4, 5, 6];

function skip(items) {
  const [, , ...arr] = items;
  return arr;
}
const arr = skip(elems);
console.log(arr);
