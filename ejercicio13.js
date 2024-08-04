function nameFinder(nameList, nameToFind) {
  // Encuentra el índice del nombre en el array
  const index = nameList.indexOf(nameToFind)

  // Verifica si el índice es válido (es decir, el nombre fue encontrado)
  if (index !== -1) {
    // Devuelve un objeto con true y el índice del nombre
    return { found: true, position: index }
  } else {
    // Devuelve un objeto con false y sin posición
    return { found: false, position: null }
  }
}

// Array para probar la función
const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

// Pruebas
console.log(nameFinder(names, 'Tony')) // { found: true, position: 2 }
console.log(nameFinder(names, 'Natasha')) // { found: true, position: 3 }
console.log(nameFinder(names, 'John')) // { found: false, position: null }
