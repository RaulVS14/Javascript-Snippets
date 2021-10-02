export default function checkFirstElementContainsLettersOfSecond(arr) {
  if(arr.length !=2) return;
  let word1 = arr[0].toLowerCase();
  let word2 = arr[1].toLowerCase();
  for(let i of word2){
    if(!word1.includes(i)){
      return false
    }
  }
  return true;
}
