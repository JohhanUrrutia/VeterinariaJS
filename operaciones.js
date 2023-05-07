import { readFile, writeFile } from "node:fs/promises";

// FUNCIÓN PARA REGISTRAR UNA CITA
export const registrar = async (nombre, edad, animal, color, enfermedad) => {
  try {
    // LEE EL ARCHIVO Y TRANSFORMA A UN ARRAY DE OBJETOS QUE ENTIENDE JAVASCRIPT
    const citas = JSON.parse(await readFile("citas.json"));
    // OBJETO A AGREGAR
    const cita = {
      nombre,
      edad,
      animal,
      color,
      enfermedad,
    };
    // EMPUJA EL OBJETO AL ARREGLO
    citas.push(cita);
    // SOBREESCRIBE EL ARCHIVO ORIGINAL CON EL ARRAY DE OBJETOS "CITAS" Y ADEMÁS LO TRANSFORMA A STRING
    await writeFile("citas.json", JSON.stringify(citas));
    // LO PRESENTA EN CONSOLA LUEGO DE AGREGARLO
    console.log(citas);
  } catch (error) {
    console.log(error);
  }
};

export const leer = async () => {
  try {
    // TOMA Y LEE EL ARCHIVO DE "CITAS"
    const citas = JSON.parse(await readFile("citas.json"));
    console.log(citas);
  } catch (error) {
    console.log(error);
  }
};
