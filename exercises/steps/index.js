// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, step = 0, content = '') {
    if (n === step) {
        return
    }
    if (content.length === n) {
        console.log(content)
        steps(n, step + 1)
    }
    else {
        content.length <= step ?  content += "#" : content += " "
        steps(n, step, content)
    }
 }

module.exports = steps;
