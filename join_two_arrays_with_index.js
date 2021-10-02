export default function arraysSplicer(arr1, arr2, n) {
  return [...arr2.slice().splice(0, n),...arr1.slice(),...arr2.slice().splice(n, arr2.length)];
}
