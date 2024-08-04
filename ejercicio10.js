function average(numberList) {
  // Verifica si el array está vacío para evitar división por cero
  if (numberList.length === 0) return 0

  // Usa reduce para acumular la suma de todos los números en el array
  const sum = numberList.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )

  // Calcula y devuelve el promedio
  return sum / numberList.length
}

// Array para probar la función
const numbers = [12, 21, 38, 5, 45, 37, 6]
console.log(average(numbers)) // Imprime el promedio
