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

// Aplica una serie de operaciones a la matriz 'students'
const result = students
  // Utiliza el método 'map' para transformar cada objeto de estudiante en un nuevo objeto
  .map(({ name, lastname, age }) => ({
    student: `${name} ${lastname}`, // Crea una propiedad 'student' con el nombre completo del estudiante
    age, // Copia la propiedad 'age' sin cambios
  }))
  // Filtra la matriz para mantener solo a los estudiantes mayores de 20 años
  .filter((student) => student.age > 20)
  // Ordena la matriz en función de la propiedad 'age' en orden descendente
  .sort((a, b) => b.age - a.age)
  // Reduce la matriz a un solo valor sumando todas las edades de los estudiantes
  .reduce((total, student) => total + student.age, 0);

// Imprime el resultado, que es la suma de las edades de los estudiantes mayores de 20 años
console.log(result);
