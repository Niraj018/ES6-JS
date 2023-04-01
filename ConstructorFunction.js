const Rocket = function (planet) {
  this.planet = planet;
};
const alien = new Rocket("leisenburg");

// constructor call where we are setting planet as a parameter of function rocket and the planet is passed as this.planet  now using class syntax to pass a constructor function

//  unless the one at the top where we need to create a constructor using function parameter we can easily create a constructor using classs syntax

class Rocker {
  constructor(stage) {
    this.stage = stage;
  }
}
const babyMetal = new Rocker("Headbanger");
console.log(alien.planet);
console.log(babyMetal.stage);

// using function

function makeclass() {
  class Vegetable {
    constructor(farmed) {
      this.farmed = farmed;
    }
  }
  return Vegetable;
}
const Vegetable = makeclass();
const veggie = new Vegetable("Tomato");
console.log(veggie.farmed);
