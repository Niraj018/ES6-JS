const arr = { Height: 5.9, Weight: 74, Jump: 1.73 };

const call = (function () {
  return function call({ Height, Weight }) {
    return (Height + Weight) / 2;
  };
})();
console.log(call(arr));
