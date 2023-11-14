const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Base de multiplicar'
  })
  .check((argv, options) => {
    if (!Number(argv.b)) {
      throw new Error("La base tiene que ser un número");
    }
    return true;
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    default: false,
    describe: 'Muestra la tabla en consola'
  })
  .option('t', {
    alias: 'to',
    type: 'number',
    default: 10,
    describe: 'Limite de la multiplicacion'
  })
.argv;

module.exports = argv;