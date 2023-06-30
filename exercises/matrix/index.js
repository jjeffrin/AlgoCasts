// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let results = []
    let count = 1
    let startRow = 0
    let endRow = n - 1
    let startColumn = 0
    let endColumn = n - 1

    for (let index = 0; index <= n - 1; index++) {
        results.push([])
    }

    while (startRow <= endRow && startColumn <= endColumn) {

        // top row
        for (let index = startColumn; index <= endColumn; index++) {
            results[startRow][index] = count
            count++
        }
        startRow++

        // right column
        for (let index = startRow; index <= endRow; index++) {
            results[index][endColumn] = count
            count++
        }
        endColumn--

        // bottom row
        for (let index = endColumn; index >= startColumn; index--) {
            results[endRow][index] = count
            count++
        }
        endRow--

        // left column
        for (let index = endRow; index >= startRow; index--) {
            results[index][startColumn] = count
            count++
        }
        startColumn++
    }

    return results
}

module.exports = matrix;
