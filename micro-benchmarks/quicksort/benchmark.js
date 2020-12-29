const quicksort = require("../../quicksort/ts-js/quicksort").default
const unsorted = require("./DATA").default
console.log(`${unsorted.length} Element`)
console.log("====================")
console.time("builtInSort")
// as Built-in sort is in place function , we need to create new Array
unsorted
  .map((el) => el)
  .sort((firstArg, secondArg) => {
    if (firstArg < secondArg) return -1
    if (firstArg > secondArg) return 1
    return 0
  })
console.timeEnd("builtInSort")

console.time("quicksort")
quicksort(unsorted)
console.timeEnd("quicksort")
