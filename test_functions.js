export default function test(func,expected, ...args){
  console.log(func(...args) === expected);
  let msg_str =` ${func.name} with params [${args.join(' and ')}]`
  let result_message = (func(...args) === expected) ? `Test passed: ${msg_str}`:`Test failed: ${msg_str}`;
  console.log(result_message);
}
