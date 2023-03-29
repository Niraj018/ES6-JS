var arrayObj = { x: "Niraj", y: "Is", z: "Learning" };

//   Previous way of assigning values to x,y and z;
var x = arrayObj.x;
var y = arrayObj.y;
var z = arrayObj.z;

console.log(x);
console.log(y);
console.log(z);

// Now we use destructuring to do the same thing

const { x: a, y: b, z: c } = arrayObj;

console.log(a);
console.log(b);
console.log(c);

// It is a quicker way of assigning values to an element.

var temperature = { yesterday: 37.5, today: 42.7, tomorrow: 39.7 };

function TempToday(temp) {
  "use strict";
  var { today: TempToday } = temp;
  return TempToday;
}

console.log(TempToday(temperature));
