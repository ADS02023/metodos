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
// Utiliza el método 'some' para verificar si al menos un estudiante tiene el apellido "Doe"
const result = students.some((student) => student.lastname === "Doe");

// Imprime el resultado, que será 'true' si al menos un estudiante tiene el apellido "Doe", 
//o 'false' si ninguno lo tiene.
console.log(result);
