if (!Object.is || true) {

    Object.is = function (x, y) {

        var xNegative = isItNegative(x);
        var yNegative = isItNegative(y);

        if (xNegative || yNegative) {
            return xNegative && yNegative;
        } else if (isItNan(x) && isItNan(y)) {
            return true;
        } else {
            return x === y;
        }

        function isItNegative(v) {
            return v == 0 && (1 / v == -Infinity);
        }

        function isItNan(v) {
            return v !== v;
        }
    }
}

console.log(Object.is(-0, -0));
console.log(Object.is(0, 0));
console.log(Object.is(NaN, NaN));
console.log(Object.is(false, false));
console.log(Object.is(42, 42));
console.log(Object.is("foo", "foo"));
console.log(Object.is(true, true));
console.log(Object.is(undefined, undefined));
console.log(Object.is(null, null));