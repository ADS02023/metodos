// Crea una matriz vacía llamada 'fullnames' para almacenar los nombres completos
const fullnames = [];

// Utiliza un bucle 'forEach' para recorrer cada estudiante en la matriz 'students'
students.forEach((student) => {
  // Para cada estudiante, concatena su nombre y apellido y agrega el resultado a la matriz 'fullnames'
  fullnames.push(student.name + " " + student.lastname);
});

// Imprime la matriz 'fullnames', que contiene los nombres completos de los estudiantes
//console.log(fullnames);
