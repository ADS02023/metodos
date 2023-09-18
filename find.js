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
  
// Utiliza el método 'find' para buscar un estudiante cuyo nombre sea "Ryan"
const result = students.find((student) => student.name === "Ryan");

// Imprime el resultado, que es el primer estudiante encontrado con el nombre "Ryan" o 'undefined' si no se encuentra ninguno.
console.log(result);
