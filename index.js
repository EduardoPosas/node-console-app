const argv = require('./config/yargs');
const { multiply } = require("./helpers/createTxt");

console.clear();

// console.log(process.argv);
console.log(argv);

/**
 * comando sin abreviatura: node .\index.js --base 5
 * con abrviatura: node .\index.js -b 5
 */
console.log(argv.base); // 5
console.log(argv.b); // 5

multiply(argv.b, argv.l, argv.t);
