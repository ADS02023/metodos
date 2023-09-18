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

// Utiliza el método 'map' para transformar la matriz de estudiantes
const doubleage = students
  // En el primer 'map', agrega la propiedad 'course' a cada estudiante con el valor "Programming"
  .map((student) => ({
    ...student, // Copia todas las propiedades del estudiante actual
    course: "Programming", // Agrega la propiedad 'course' con el valor "Programming"
  }))
  // En el segundo 'map', duplica la propiedad 'age' de cada estudiante
  .map((student) => ({
    ...student, // Copia todas las propiedades del estudiante actual
    age: student.age * 2, // Duplica la propiedad 'age'
  }));

// Imprime el resultado, que es una nueva matriz de estudiantes con las transformaciones aplicadas
console.log(doubleage);

