export default function factorialize(num) {
  if(num === 1 || num === 0) return 1;
  return num * factorialize(num - 1);
}
