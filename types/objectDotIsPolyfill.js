if (!Object.is || true) {
  Object.is = (x, y) => {
    if (!Number.isNaN(x) && !Number.isNaN(y)) {
      if (typeof x === "number" && typeof y === "number") {
        return 1 / x === 1 / y;
      } else {
        return x === y;
      }
    }

    return Number.isNaN(x) === true && Number.isNaN(y) === true ? true : false;
  };
}

console.log(Object.is(-0, 0));
console.log(Object.is(0, -0));
console.log(Object.is(0, NaN));
console.log(Object.is(NaN, 0));
console.log(Object.is(42, "42"));
console.log(Object.is("foo", "bar"));
console.log(Object.is(false, true));
console.log(Object.is(null, undefined));
console.log(Object.is(undefined, null));
