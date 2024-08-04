function averageWord(list) {
  let sum = 0 // Inicializa la variable para almacenar la suma
  let count = 0 // Inicializa la variable para contar los elementos procesados

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'number') {
      sum += list[i] // Suma el número al total
      count++ // Incrementa el contador de elementos procesados
    } else if (typeof list[i] === 'string') {
      sum += list[i].length // Suma la longitud de la cadena al total
      count++ // Incrementa el contador de elementos procesados
    }
  }

  // Devuelve el promedio si hay elementos procesados, de lo contrario, devuelve 0
  return count > 0 ? sum / count : 0
}

// Array para probar la función
const mixedElements = [
  6,
  1,
  'Marvel',
  1,
  'hamburguesa',
  '10',
  'Prometeo',
  8,
  'Hola mundo'
]
console.log(averageWord(mixedElements)) // Imprime el promedio calculado
