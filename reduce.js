// Calcula la suma de todos los valores en la matriz 'points'
const total = points.reduce((total, point) => total + point, 0);

// Calcula la suma de todas las edades de los estudiantes en la matriz 'students'
const totalAges = students.reduce((total, student) => total + student.age, 0);

// La variable 'totalAges' contiene la suma de edades
totalAges;

// Una matriz de objetos que representan desarrolladores con habilidades
const developers = [
  {
    id: 1,
    name: "John",
    skills: ["HTML", "React", "Javascript", "Java"],
  },
  {
    id: 2,
    name: "Jane",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
  {
    id: 3,
    name: "Jack",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
];

// Utiliza 'reduce' para combinar todas las habilidades de los desarrolladores en una sola matriz
const resultt = developers.reduce(function (allSkills, student) {
  return Array.from(new Set([...allSkills, ...student.skills]));
}, []);

// Imprime la matriz 'result', que contiene todas las habilidades únicas de los desarrolladores
//console.log(resultt);