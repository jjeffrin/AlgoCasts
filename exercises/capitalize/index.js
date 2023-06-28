// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let sentence = str[0].toUpperCase()
    for (let index = 1; index < str.length; index++) {
        if (str[index-1] === ' ') {
            sentence += str[index].toUpperCase()
        }
        else {
            sentence += str[index]
        }
    }
    return sentence
}

// solution 1
// function capitalize(str) {
//     const words = []
//     str.split(' ').forEach(word => {
//         words.push(word[0].toUpperCase() + word.slice(1, word.length))
//     })
//     return words.join(' ')
// }

module.exports = capitalize;
