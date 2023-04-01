function myClass() {
  class Stat {
    constructor(Temp) {
      this._Temp = (5 / 9) * (Temp - 32);
      //   _Temp Specifies that the variable is a private variable
    }
    get Temperature() {
      return this._Temp;
    }
    set Temperature(UpdatedTemp) {
      this._Temp = UpdatedTemp;
    }
  }
  return Stat;
}
const statistic = myClass();
const st = new statistic(69);
let temp = st.Temperature;
st.Temperature = 42;
temp = st.Temperature;
console.log(temp);
