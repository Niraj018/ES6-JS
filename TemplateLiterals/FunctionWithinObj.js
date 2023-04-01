const Bike = {
  gear: 2,
  setGear: function (newGear) {
    this.gear = newGear;
  },
};
Bike.setGear(5);
console.log(Bike.gear);

//  we can also use the function without writing the function as:
// setgear(newGear){
// this.gear = newGear;
// }
