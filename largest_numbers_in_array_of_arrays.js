export default function largestNumbersInArrayOfArrays(arr) {
  let result_arr = [];
  for(let i of arr){
    let largest = -Infinity;
    for(let j of i){
      if(j > largest) largest = j;
    }
    result_arr.push(largest);
  }
  return result_arr;
}
