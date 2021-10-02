export default function test(func,expected, ...args){
  console.log(func(...args) === expected);
  let msg_str =` ${func.name} \n with ${args.map((el, index)=>`arg${index+1}: ${el}`)} \n -`;
  let result =func(...args);
  let result_message = (result === expected) ? `Test passed: ${msg_str} ${result} === ${expected}`:`Test failed: ${msg_str} ${result} !== ${expected}`;
  console.log(result_message);
}
