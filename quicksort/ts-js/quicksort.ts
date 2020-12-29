export default function quicksort(props: number[]) {
  // Check if input is Array
  if (!Array.isArray(props)) {
    return []
  }
  const sort = (array: number[]) => {
    /*
     * Base Case Of Recursive Call ::: Return The Same Array (With Single Element)
     */
    if (array.length <= 1) {
      return array
    }
    const pivot = array[0] // Pick 1st Element as Pivot (Which Element to Pick is Optional)
    const lt_Pivot = [] // Less Than Pivot
    const gte_Pivot = [] // Greater Than Or Equal Pivot
    /*
     *  1- Loop Through Array Element ( Excluding First Element That We Picked As Pivot)
     *  2- Push Element Less Than Pivot to #lt_Pivot , Greater Than Or Equal Than Pivot to #gte_Pivot
     */
    for (let index = 1; index < array.length; index++) {
      const currentElement = array[index]
      if (currentElement < pivot) {
        lt_Pivot.push(currentElement)
      } else {
        gte_Pivot.push(currentElement)
      }
    }

    /*
     *  Sort Again Element of :
     *  1- Value Less than Pivot Using Same Approach ( Recursive Call)
     *  2- Value Greater than or Equal Pivot Using Same Approach ( Recursive Call)
     *
     *  At The Base Case of Recursive Function Calls (Array Contain Only 1 Element)
     *  Concatenation Will Happen In Chain Returning Our Last Ordered Array
     */
    return Array.prototype.concat(sort(lt_Pivot), pivot, sort(gte_Pivot))
  }

  return sort(props)
}
