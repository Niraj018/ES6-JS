const [a, , b] = [2, 4, 5, 6, 7, 8];

// This only allows the user to assign variables of the first two elements to a and b so in order to skip the elements that needs to be assigned we need to use an empty comma so that the variables can be asssigned to the exact position that needs to be assigned

console.log(a, b); // answer will be 2,5

//Can also be used to switch values between two elements

var x = 10,
  y = 7;

function swap() {
  [x, y] = [y, x];
}
swap();

console.log(x);
console.log(y);
