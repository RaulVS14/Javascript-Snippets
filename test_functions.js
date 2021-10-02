export default function test(func, expected, ...args) {
    console.log(func(...args) === expected);
    let result = func(...args);
    let enclosure_str = '\n==================================\n';
    let check = (result === expected);
    let status_str = `Testing function '${func.name}' ${check ? 'passed' : 'failed'}:`;
    let args_str = ` \n === ARGS ===\n${[...args.map((el, index) => ` ${index + 1}: ${el}`)].join("\n")} \n`;
    let result_str = `=== RESULT ===\n expected: ${expected}\n got: ${result}`;
    let response_str = `${enclosure_str} ${status_str} ${args_str} ${result_str}${enclosure_str}`;
    console.log(response_str);
}
