function sumNumbers(numberList) {
  // Usa reduce para acumular la suma de todos los números en el array
  return numberList.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )
}

// Array para probar la función
const numbers = [1, 2, 3, 5, 45, 37, 58]
console.log(sumNumbers(numbers)) // Imprime 151
