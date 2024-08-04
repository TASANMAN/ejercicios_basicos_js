function repeatCounter(list) {
  // Crear un objeto para almacenar las frecuencias de las palabras
  const wordCount = {}

  // Iterar sobre cada palabra en el array
  for (const word of list) {
    if (wordCount[word]) {
      // Si la palabra ya está en el objeto, incrementar su contador
      wordCount[word]++
    } else {
      // Si la palabra no está en el objeto, agregarla con un contador de 1
      wordCount[word] = 1
    }
  }

  // Crear un array de cadenas en el formato deseado
  const result = Object.entries(wordCount)
    .map(([word, count]) => `${word}: ${count}`)
    .join(', ')

  return result
}

// Array para probar la función
const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
]

console.log(repeatCounter(words))
// Imprime: 'code: 4, repeat: 1, eat: 1, sleep: 3, enjoy: 2'
