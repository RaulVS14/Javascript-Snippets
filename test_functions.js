export default function test(func, expected, ...args) {
    console.log(func(...args) === expected);
    let msg_str = ` ${func.name} \n with${args.map((el, index) => ` arg${index + 1}: ${el}`)} \n -`;
    let result = func(...args);
    let enclosure_str = '\n==================================\n';
    let result_message = (result === expected) ? `${enclosure_str}Test passed: ${msg_str} ${result} === ${expected}${enclosure_str}` : `${enclosure_str}Test failed: ${msg_str} ${result} !== ${expected}${enclosure_str}`;
    console.log(result_message);
}
