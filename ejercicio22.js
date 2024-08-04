const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']

const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

let fruitIndex = 0 // Índice para recorrer el array de frutas

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    // Reemplazar comida no vegana con una fruta
    if (fruitIndex < fruits.length) {
      foodSchedule[i].name = fruits[fruitIndex]
      fruitIndex++ // Pasar a la siguiente fruta
    } else {
      console.log(
        'No hay suficientes frutas para reemplazar todas las comidas no veganas.'
      )
      break // Salir del bucle si no hay más frutas
    }
  }
}

console.log(foodSchedule)
