function removeDuplicates(list) {
  // Usa un Set para eliminar duplicados
  const uniqueSet = new Set(list)

  // Convierte el Set de vuelta a un array
  return Array.from(uniqueSet)
}

// Array para probar la función
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
console.log(removeDuplicates(duplicates)) // Imprime el array sin duplicados
