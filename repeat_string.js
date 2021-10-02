export default function repeatStringNumTimes(str, num) {
  if (num < 0) return '';
  let result = '';
  let count = 0;
  while (count < num){
    result+=str;
    count++;
  }
  return result;
}
