// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let reversed = 0
    let sign = false
    if ( n < 0) {
        sign = true
        n = n * -1
    }
    while (n > 0) {
        let remainder = n % 10
        reversed = remainder + (reversed * 10)
        n = Math.floor(n/10)
    }
    return sign ? reversed * -1 : reversed
}

// solution 1
// function reverseInt(n) { 
//     return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
// }

module.exports = reverseInt;
