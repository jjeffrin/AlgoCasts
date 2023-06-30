// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {}

function pyramid(n, step = 0, content = '') {
    if (n === step) return

    if (content.length === (2 * n) - 1) {
        console.log(content)
        pyramid(n, step + 1, '')
    }
    else {
        writeContent(step, (2 * n) - 1, content.length) ? content += '#' : content += ' ' 
        pyramid(n, step, content)
    }
}

function writeContent(step, totalCols, contentLength) {
    let center = Math.floor(totalCols / 2)
    return ((contentLength >= center - step) && (contentLength <= center + step))
}

module.exports = pyramid;
