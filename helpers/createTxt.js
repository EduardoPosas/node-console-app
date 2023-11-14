const fs = require("fs");
const colors = require("colors/safe");

const multiply = async (base, list, limit) => {
  try {
    let result = "";

    for (let i = 1; i <= limit; i++) {
      result += `\n${base} * ${i} = ${base * i}`;
    }

    /** Listar elementos en consola */
    if (list) {
      console.log(colors.bgBlue("======================="));
      console.log(colors.bold(`       Tabla - ${base}`));
      console.log(colors.bgBlue("======================="));
      console.log(result);
    }

    /** Crear txt */
    fs.writeFile(`./textFiles/Tabla-${base}.txt`, result, (err) => {
      if (err) {
        throw new Error("Archivo de texto no se creo");
      }
    });

    return console.log(colors.bgGreen(`Tabla-${base}.txt creado`));
  } catch (error) {
    throw error;
  }
};

module.exports = {
  multiply,
};
