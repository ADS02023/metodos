//mismo array student que el del archivo data.js
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
  
// Utiliza el método 'every' para verificar si todos los estudiantes tienen un nombre que
// incluye la letra "J"
const result3 = students.every((students) => students.name.includes("J"));

// Imprime el resultado, que será 'true' si todos los estudiantes cumplen la condición, o 
//'false' si al menos uno no la cumple.
console.log(result3);
