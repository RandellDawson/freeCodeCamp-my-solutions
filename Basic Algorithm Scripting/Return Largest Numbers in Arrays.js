/* Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function largestOfFour(arr) {
  return arr.reduce( (largeArray,items) => largeArray.concat(Math.max.apply(null,items)),[]);
}

// functional version
function largestOfFour_v2(arr) {return arr.map((a)=>Math.max(...a));}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
