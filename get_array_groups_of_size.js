export default function chunkArrayInGroups(arr, size) {
  let result_array = []
  console.log(arr.length, arr.length/size, size);
  for(let i =0; i< (arr.length/size); i++){
    result_array.push(arr.slice(i*size,i*size+size));
  }
  return result_array;
}
