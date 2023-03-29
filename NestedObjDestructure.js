const bike = {
  Kawasaki: { Mileage: 15, Speed: 320 }, // Creating nested object of array
  YamahaR1: { Mileage: 15, Speed: 299 },
};

function speedster(twoWheeler) {
  "use strict";
  const {
    Kawasaki: { Mileage: mile }, //Destructuring the
  } = twoWheeler;
  // Using destructuring twice as the object is inside araay of object
  return mile;
}
console.log(speedster(bike));
