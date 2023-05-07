import { argv } from "node:process";
import { leer, registrar } from "./operaciones.js";

const [operacion, nombre, edad, animal, color, enfermedad] = argv.slice(2);

if (operacion === "registrar") {
  if (!nombre || !edad || !animal || !color || !enfermedad) {
    console.log("Favor ingresa todos los datos del animal");
  } else {
    registrar(nombre, edad, animal, color, enfermedad);
  }
}
if (operacion === "leer") {
  leer();
}
