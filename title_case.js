export default function titleCase(str) {
  let result = [];
  for(let word of str.split(" ")){
    let lowerCaseWord = word.toLowerCase();
    result.push(lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1));
  }
  return result.join(' ');
}
