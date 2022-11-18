// negative zero
// may use in map application or stock market app
// bot -0 === -0 & -0 === 0 returns true!
//  -0 < 0 & -0 > 0 returns false
// var x = -0;
// if (x === -0) console.log(true);
// else console.log(false);

// console.log(x.toString()); // tostring removes tthe - sign

// Object.is(x, -0); //Returns true if the values are the same value, false otherwise. added in ES6

// Math.sign() Returns the sign of the x, indicating whether x is positive, negative or zero.
// Math.sign(0) returns 0
// Math.sign(-0) returns -0

// function sign(number) {
//   return number !== 0 ? Math.sign(number) : Object.is(number, -0) ? -1 : 1;
// }

// console.log(sign(-3));
// console.log(sign(3));
// console.log(sign(0));
// console.log(sign(-0));

function foramtTrend(trend) {
  return trend < 0 || Object.is(trend, -0) ? "down" : "up";
}
console.log(foramtTrend(-3));
console.log(foramtTrend(3));
console.log(foramtTrend(-0));
console.log(foramtTrend(0));
console.log(foramtTrend(1));

