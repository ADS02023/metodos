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
//console.log(doubleage);
