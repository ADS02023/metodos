// Importa el objeto 'students' desde el módulo './data/sample_data.js'
import { students } from "./data/sample_data.js";

// Utiliza el método 'find' para buscar un estudiante cuyo nombre sea "Ryan"
const result = students.find((student) => student.name === "Ryan");

// Imprime el resultado, que es el primer estudiante encontrado con el nombre "Ryan" o 'undefined' si no se encuentra ninguno.
//console.log(result);
