function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    var result = [];
    var result2 = [];
    for (var i = 0; i < birds.length; i++) {
        if (!geese.includes(birds[i])) {
            result.push(birds[i])
        }
    }
    return result;
};

function hoopCount(n) {
    return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
}

function findDifference(a, b) {
    var resulta = 1;
    var resultb = 1;
    for (var i = 0; i < a.length; i++) {
        resulta *= a[i];
        resultb *= b[i];
    }
    return resulta - resultb < 0 ? (resulta - resultb) * -1 : resulta - resultb;
}

function isDivideBy(number, a, b) {
    return true ? (number % a == 0 && number % b == 0) : false;
}

function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    var x = "";
    for (var i = 0; i < dna.length; i++) {
        dna[i] === "T" ? x += "U" : x += dna[i]
        if (i === dna.length - 1) {
            return x;
        }
    }
    return x;
}