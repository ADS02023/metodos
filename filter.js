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
  
// Filtra los estudiantes en función de la condición de que su edad sea mayor que 21
const result = students.filter((student) => student.age > 21);

// Imprime el resultado, que es una nueva matriz que contiene solo los estudiantes mayores de 21 años
console.log(result);
