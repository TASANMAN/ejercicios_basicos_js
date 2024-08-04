function findLongestWord(stringList) {
  // Inicializa la variable para almacenar el string más largo
  let longestWord = ''
  // Itera sobre cada string en el array
  for (let i = 0; i < stringList.length; i++) {
    // Compara la longitud del string actual con el string más largo encontrado
    if (stringList[i].length > longestWord.length) {
      longestWord = stringList[i]
    }
  }
  // Devuelve el string más largo
  return longestWord
}
// Array para probar la función
const avengers = [
  'Hulk',
  'Thor',
  'Iron Man',
  'Captain AM.',
  'Spiderman',
  'Captain M.'
]
// Prueba la función
console.log(findLongestWord(avengers)) // Imprime Captain AM.
