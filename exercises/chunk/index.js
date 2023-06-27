// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const masterArray = []
    
    array.forEach(num => {
        let last = masterArray[masterArray.length - 1]
        if (!last || last.length === size) {
            masterArray.push([num])
        }
        else if (last.length < size) {
            last.push(num)
        }
    })

    return masterArray
}

// solution 1
// function chunk(array, size) {
//     const masterArray = []
//     let index = 0
//     while (index < array.length) {
//         masterArray.push(array.slice(index, size + index))
//         index = index + size
//     }
//     return masterArray
// }

module.exports = chunk;
