// Importa el objeto 'students' desde el módulo './data/sample_data.js'
import { students } from "./data/sample_data.js";

// Utiliza el método 'some' para verificar si al menos un estudiante tiene el apellido "Doe"
const result = students.some((student) => student.lastname === "Doe");

// Imprime el resultado, que será 'true' si al menos un estudiante tiene el apellido "Doe", 
//o 'false' si ninguno lo tiene.
//console.log(result);
