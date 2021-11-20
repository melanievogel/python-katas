/**
 * 6 falsy values in JS:
 * 
 * - 0
 * - null
 * - NaN
 * - ""
 * - undefined
 * - false
 * 
 * --> !variable
 */

function min(a, b) {
    if (a < b) {
        if (a === null) {
            return 0;
        }

        if (!a) {

            if (a === 0) {
                return 0;
            }

            return b;
        }
        if (!b) {

            return a;
        }
    }

    if (isNaN(a)) {
        return NaN;
    }

    if (b === null) {
        return 0;
    }

    return (a < b) ? a : b;
}

//Works but timeout
function mygcd(x, y) {
    var res = [];
    var dings = [x, y].sort();
    for (let i = 1; i <= Math.min(...dings); i++) {
        if ((x % i) === 0 && (y % i) === 0) {
            res.push(i);
        }
    }
    return Math.max(...res);
}

//Euclidian Algorithm
function mygcd(x, y) {
    if (x === 0) {
        return y;
    }
    while (y !== 0) {
        if (x > y) {
            x = x - y;
        } else {
            y = y - x;
        }
    }
    return x
}

