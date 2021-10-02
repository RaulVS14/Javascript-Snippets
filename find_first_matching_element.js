export default function findFirstMatchingElement(arr, func) {
  for(let el of arr){
    if(func(el)) return el;
  }
}
