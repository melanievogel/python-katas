function findLongest(str) {
    var spl = str.split(" ");
    var longest = 0;
    for (var i = 0; i < spl.length; i++) {
        if (spl[i].length > longest) {
            longest = spl[i].length
        }
    }
    return longest;
}

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

function makeNegative(num) {
    return num >= 0 ? num * -1 : num
}

function multiply(a, b) {
    return a * b;
}

function move(position, roll) {
    return roll * 2 + position;
}

function addFive(num) {
    var total = num + 5
    return total
}

function expressionMatter(a, b, c) {
    var resultA = a * (b + c);
    var resultB = a * b * c;
    var resultC = a + b * c;
    var resultD = (a + b) * c;
    var resultE = a + b + c;
    var result = Math.max(resultA, resultB, resultC, resultD, resultE);
    return result;
}

function even_or_odd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

function opposite(number) {
    return number < 0 ? Math.abs(number) : number * -1;
}

function lovefunc(flower1, flower2){
    if(flower1 % 2 != 0 && flower2 % 2 == 0){
      return true;
    }
    else if (flower1 % 2 == 0 && flower2 % 2 != 0){
      return true;
    }
    else if (flower1 % 2 == 0 && flower2 % 2 == 0){
      return false;
    }
    return false;
  }