//mismo array students del archivo data.js
const students = [
  {
    name: "Jill",
    lastname: "Doe",
    age: 23,
    course: "Marketing",
  },
  {
    name: "John",
    lastname: "Doe",
    age: 20,
    course: "Web Development",
  },
  {
    name: "Jack",
    lastname: "Doe",
    age: 22,
    course: "Accounting",
  },
  {
    name: "Ryan",
    lastname: "Ray",
    age: 20,
    course: "Web Development",
  },
  {
    name: "Jane",
    lastname: "Doe",
    age: 21,
    course: "Financial Management",
  },
];

// Crea una matriz vacía llamada 'fullnames' para almacenar los nombres completos
const fullnames = [];

// Utiliza un bucle 'forEach' para recorrer cada estudiante en la matriz 'students'
students.forEach((student) => {
  // Para cada estudiante, concatena su nombre y apellido y agrega el resultado a la matriz 'fullnames'
  fullnames.push(student.name + " " + student.lastname);
});

// Imprime la matriz 'fullnames', que contiene los nombres completos de los estudiantes
console.log(fullnames);

