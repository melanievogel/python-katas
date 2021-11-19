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
