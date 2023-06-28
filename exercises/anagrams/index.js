// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

// solution 1
// function anagrams(stringA, stringB) {
//     const charMapA = {}
//     const charMapB = {}

//     for (let char of stringA.replace(/[^\w]/g, '').toLowerCase()) {
//         charMapA[char] = charMapA[char] + 1 || 1
//     }

//     for (let char of stringB.replace(/[^\w]/g, '').toLowerCase()) {
//         charMapB[char] = charMapB[char] + 1 || 1
//     }

//     if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//         return false
//     }

//     for (let char in charMapA) {
//         if (charMapA[char] !== charMapB[char]) {
//             return false
//         }
//     }

//     return true
// }

anagrams('Whoa! Hi!', 'Hi! Whoa!')

module.exports = anagrams;
