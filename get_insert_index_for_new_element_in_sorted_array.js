export default function getIndexToIns(arr, num) {
  if(arr.length === 0) return 0;
  let sorted_arr = arr.sort((a,b) => a-b);
  for(let i = 0; i<sorted_arr.length; i++){
    if(sorted_arr[i] >= num){
      return i;
    }
  }
  return sorted_arr.length;
}
