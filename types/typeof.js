// typeof returns the value type not the variable type
// it always returns string

// so any time we have to compare with any type must use "" or ''

// let x = 5;
// if (typeof x === "number") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// typeof null returns "object"

// if we want to unset any variable value we use, undefined. for Object it is null . it was a js bug.

// typeof function () {}; returns "function"

const v = [];
// console.log(typeof v); returns "object"
// array is not an object type but subset of object type Array.isArray determines it is an array or not.

// console.log(typeof 43n); returns "bigint"

// undefined vs undeclared
// a variable never been created is undeclared.

// NaN is actually not not an Number. but invalid number . NaN is not equls to itself NaN === NaN returns "false"

// isNaN('xyz') returns true
// xyz value coers to a number and that is not a valid number , so it returns true
// Number.isNaN("xyz") it checks if xyz is a NaN. if yes then returns true, false otherwise

// if (undefined === undefined) {
//   console.log(true);
// } else console.log(false);

// console.log(isNaN("xyz"));
// console.log(Number.isNaN("xyz"));


